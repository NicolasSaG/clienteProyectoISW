import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import ServiciosList from "./ServiciosList";

const Servicios = () => {

    return (
        <div>
            <Jumbotron className="bg-primary text-white">
                <h1>Solicitudes de servicios</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col sm={1} />
                    <Col sm={10}>
                        <h2>Iztacalo</h2>
                        <ServiciosList />
                    </Col>
                    <Col sm={1} />
                </Row>
            </Container>
        </div>
    );
}

export default Servicios;
