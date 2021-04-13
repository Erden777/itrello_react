import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import { useCookies } from "react-cookie";
import React, {createContext, useState} from "react";

export const AuthContext = createContext();

function App() {   
  const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

  return (
    <AuthContext.Provider value={{cookieJWT, setCookieJWT, removeCookieJWT}}>
    <> 
    <Header/>
    <div className="container mt-4" style={{minHeight:"85vh"}}>
      <Home/>
    </div>
    <Footer/>
    </>
     </AuthContext.Provider>
  );
}

export default App;
