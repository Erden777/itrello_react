import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useCookies} from 'react-cookie';
import Notifications, {notify} from 'react-notify-toast';
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props){
    
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        const inputData = {email, password};
        auth(inputData);
        event.preventDefault();
    }

    async function auth(data){
        const response = await fetch("http://localhost:8000/auth", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
          });

        if(response.status==200){
            let jwt = await response.json();
            setCookieJWT('jwt', jwt);
            window.location.replace("/");
        }else{
            alert("Wrong login or password");
        }
    }

    return (
      <>
      <div className="container">
          <div className="row">
              <div className="col-md-6 offset-3">
                  <h4 className="my-4">Sign In</h4>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={handleEmailChange} value= {email} name="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        Enter your correct email address
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handlePasswordChange} value= {password} name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="success" className="btn btn-md success float-right" type="submit">
                        Login >
                    </Button>
                    </Form>
                </div>
            </div>
      </div>
    </>
    );
}
export default Login;
