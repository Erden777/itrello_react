import React, { useEffect } from "react";
import { Navbar, Nav, NavDropdown , Form, FormControl, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {useCookies} from 'react-cookie';

function Header(props){
    const [cookieJWT, setCookieJWT, removeCookieJWT] = useCookies(['jwt']);

    const handleLogoutClick = event =>{
        removeCookieJWT('jwt');
        window.location.replace("/login");
    }
    useEffect(() => {    
    }, []);

    return (
        <>  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/" class="nav-link active text-white" style={{fontWeight:"bold"}}>
                ITrello
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link">Home</Link>
                    </Nav>
                    <Nav>
                        
                        { cookieJWT['jwt'] ?
                            <>
                                <Link to="/profile" className="nav-link" >Profile</Link>
                                <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
                            </>
                            :
                            <>
                                <Link to="/register" className="nav-link">Registration</Link>
                                <Link to="/login" className="nav-link">Login</Link>
                            </>
                        }
                        <Nav.Link href="#deets">RU</Nav.Link>
                        <Nav.Link href="#deets">EN</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;