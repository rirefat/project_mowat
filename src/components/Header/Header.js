import React from 'react';
import logo from '../../images/mowat-logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <>
            <Navbar bg="light" variant="light" className='navbar-main'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt=""/>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;