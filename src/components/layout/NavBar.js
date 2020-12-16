import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/assets/imagenes/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <strong>Arbolex</strong>
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default NavBar;
