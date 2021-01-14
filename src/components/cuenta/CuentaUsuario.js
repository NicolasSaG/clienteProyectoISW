import React, { useState } from 'react';
import { Card, Tabs, Tab, Row, Col, Jumbotron, Container, Badge } from 'react-bootstrap';
import CuentaForm from "./CuentaForm";
import PasswordForm from "./PasswordForm";

const CuentaUsuario = () => {
    const [key, setKey] = useState('cuenta');

    return (
        <div>
            <Jumbotron className="bg-primary text-white">
                <h1>Mi cuenta</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Card >
                            <br />
                            <Card.Img
                                variant="top"
                                src="https://i.pinimg.com/originals/91/40/36/9140363af3f438d4cfe865fb64f4fe76.png"
                                alt="Imagen de perfil"
                            />
                            <Card.Body>
                                <br />
                                <h4><strong>Jesus Medina Villa</strong></h4>
                                <h5>15/02/2000</h5>
                                <h3><Badge variant="warning">Iztacalco</Badge></h3>
                                <br />
                                <div align="center">
                                    <h2>27 servicios</h2>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="cuenta" title="Mi Perfil">
                                <CuentaForm />
                            </Tab>
                            <Tab eventKey="password" title="Contraseña">
                                <PasswordForm />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CuentaUsuario;
