import React, { useState } from 'react';
import { Navbar, Nav, Form, Image, Button, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Fragment } from 'react';

const NavBar = () => {
    const [logged] = useState(Cookies.get('tipo'))
    const history = useHistory();

    const cerrarSesion = () => {
        Cookies.remove('session');
        Cookies.remove('user');
        Cookies.remove('correo');
        Cookies.remove('tipo');
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
                <Nav.Link onClick={() => history.push("/mapa")}>Mapa de árboles</Nav.Link>
                {logged ==="jefe"?<Nav.Link onClick={() => history.push("/solicitudesServicios")}>Ver solicitudes de servicio</Nav.Link>:""}
                {logged ==="admin"?<Nav.Link onClick={() => history.push("/registroRepresentanteAlcaldia")}>Registrar representante de alcaldía</Nav.Link>:""}
                {logged ==="admin"?<Nav.Link onClick={() => history.push("/registroAdministrador")}>Registrar administrador</Nav.Link>:""}
            </Nav>
         
            {!logged ? <Form inline>
                <Button onClick={() => history.push("/login")} variant="outline-primary" >Iniciar Sesión</Button> &nbsp;
                <Button onClick={() => history.push("/registro")} variant="secondary">Registrarse</Button>
            </Form> :
                <Form >
                    <NavDropdown title={`@ ${Cookies.get('user')}`} id="basic-nav-dropdown">
                    {logged !=="admin"?<Fragment><NavDropdown.Item onClick={() => history.push("/miCuenta")}>Mi cuenta</NavDropdown.Item> <NavDropdown.Divider /></Fragment>:""}
                       
                        <NavDropdown.Item onClick={() => { cerrarSesion() }}>Cerrar Sesión</NavDropdown.Item>
                    </NavDropdown>
                </Form>
            }
        </Navbar>
    );
}

export default NavBar;
