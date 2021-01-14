import React, { useState } from 'react';
import { Navbar, Nav, Form, Image, Button, NavDropdown } from 'react-bootstrap';
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
                    src="/assets/imagenes/tree.png"
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
            {logged !== 'true' ? <Form inline>
                <Button onClick={() => history.push("/login")} variant="outline-primary" >Iniciar Sesión</Button> &nbsp;
                <Button onClick={() => history.push("/registro")} variant="secondary">Registrarse</Button>
            </Form> :
                <Form >
                    <NavDropdown title={`@ ${Cookies.get('user')}`} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => history.push("/miCuenta")}>Mi cuenta</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => { cerrarSesion() }}>Cerrar Sesión</NavDropdown.Item>
                    </NavDropdown>
                </Form>
            }
        </Navbar>
    );
}

export default NavBar;
