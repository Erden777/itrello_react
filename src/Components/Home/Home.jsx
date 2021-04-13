import React, { useState } from "react";
import Header from '../CardDetails/CardDetails';
import Login from '../Signin/Login';
import Register from '../Authorization/Authorization';
import Footer from '../Footer/Footer';
import Profile from '../ProfilePage/Profile'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useCookies} from 'react-cookie';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetails from "../CardDetails/CardDetails";
import CardTask from "../CardTask/CardTask";
import HomeWellcome from "./Home_Welcome";

function Home(props){
    
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    return (
      <>
      <Switch >
        <Route exact path="/">
          
        { cookieJWT.jwt ?
            <CardDetails/> :
            <HomeWellcome />
        }
        </Route>
        <Route exact path="/details/:cardid">
            <CardTask/>
        </Route>
        <Route exact path="/login">
            <Login/>
        </Route>
        <Route exact path="/register">
            <Register/>
        </Route>
        <Route exact path="/profile">
            <Profile/>
        </Route>
      </Switch>
      
      </>
    );
}
export default Home;
