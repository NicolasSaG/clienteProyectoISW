import React, { useState } from 'react';
import { Navbar, Nav, Form, Image, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavBar = () => {
    const [logged] = useState(Cookies.get('session'))
    const history = useHistory();

    const cerrarSesion = () => {
        Cookies.remove('session');
        window.location.href = "/";
    }
    return (
        <Navbar className="bg-light justify-content-between" bg="light" variant="light">
            <Navbar.Brand href="/">
                <Image
                    alt=""
                    src="/assets/imagenes/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <strong>Arbolex</strong>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => history.push("/")}>Inicio</Nav.Link>
                <Nav.Link onClick={() => history.push("/mapa")}>Mapa</Nav.Link>
                <Nav.Link onClick={() => history.push("/")}>Información</Nav.Link>
            </Nav>
            <Form inline>
                <Button onClick={() => history.push("/login")} variant="outline-primary" >Iniciar Sesión</Button> &nbsp;
                <Button onClick={() => history.push("/registro")} variant="secondary">Registrarse</Button>
            </Form>
            {logged === 'true' ? <Nav className="mr-auto">
                <Nav.Link onClick={() => { cerrarSesion() }}>Cerrar sesion</Nav.Link></Nav> : ""}
        </Navbar>
    );
}

export default NavBar;
