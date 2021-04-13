import React, { useState } from "react";
import Header from '../CardDetails/CardDetails';
import Footer from '../Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useCookies} from 'react-cookie';
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetails from "../CardDetails/CardDetails";
import CardTask from "../CardTask/CardTask";


function Authorization(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [full_name, setFull_name] = useState("");
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    console.log(cookieJWT);

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handleFullnameChange = event =>{
        setFull_name(event.target.value);
    }

    const handleRepasswordChange = event =>{
        setRepassword(event.target.value);
    }
    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{

        const inputData = {email, password, full_name};
        if(repassword===password){
            register(inputData);
        }else{
            alert('enter correct repassword')
        }
        event.preventDefault();
    }

    async function register(data){
        console.log(JSON.stringify(data));
        const response = await fetch("http://localhost:8000/register", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
          });

        if(response.status==200){
            let jwt = await response.json();
            setCookieJWT('jwt', jwt);
        }
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h4 className="my-4">Create new account</h4>
                  <Form onSubmit={handleSubmit}>
                       <Form.Group controlId="formBasicEmail">
                          <Form.Label>Full name</Form.Label>
                          <Form.Control onChange={handleFullnameChange} name="full_name" value={full_name} type="text" placeholder="Full name" />
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control onChange={handleEmailChange} name="email" value={email} type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                          Enter your correct email address
                          </Form.Text>
                      </Form.Group>
  
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control onChange={handlePasswordChange} name="password" value={password} type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Repeat Password</Form.Label>
                          <Form.Control onChange={handleRepasswordChange} name="repassword" value={repassword} type="password" placeholder="Repeat Password" />
                      </Form.Group>

                      <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="success" className="btn btn-md success float-right" type="submit">
                          Register >
                      </Button>
                      </Form>
                  </div>
              </div>
        </div>
      </>
      );
}
export default Authorization;
