import React, { useEffect, useState } from 'react';
import { Card, Tabs, Tab, Row, Col, Jumbotron, Container, Badge } from 'react-bootstrap';
import CuentaForm from "./CuentaForm";
import { SERVER_NAME } from "./../../config/constants";
import PasswordForm from "./PasswordForm";
import axios from 'axios';
import PageLoading from '../layout/PageLoading';
import Cookies from 'js-cookie';

const CuentaUsuario = () => {
    const [key, setKey] = useState('cuenta');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${SERVER_NAME}/usuario`, {
            params: {
                email: Cookies.get("correo")
            }
        }).then((response) => {
            setData(response.data)
            setLoading(false);
        })
    }, [])
    
    if (loading) return (<PageLoading />); else {
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
                                    <h4><strong>{data.nombre} {data.primerAp} {data.segundoAp}</strong></h4>
                                    <h5>15/02/2000</h5>
                                    <h3><Badge variant="warning">{data.delegacion}</Badge></h3>
                                    <br />
                                    {/* <div align="center">
                                        <h2>27 servicios</h2>
                                    </div> */}
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
                                    <CuentaForm data={data} setData={setData} />
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
}

export default CuentaUsuario;
