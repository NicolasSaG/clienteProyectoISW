import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Cookies from 'js-cookie';

const NavBar = () => {
    const [logged] = useState(Cookies.get('session'))

    const cerrarSesion = () => {
        Cookies.remove('session');
        window.location.href = "/";
    }
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
                {logged === 'true' ? <Nav className="mr-auto">
                    <Nav.Link onClick={() => { cerrarSesion() }}>Cerrar sesion</Nav.Link></Nav> : ""}
            </Navbar>
        </>
    );
}

export default NavBar;
