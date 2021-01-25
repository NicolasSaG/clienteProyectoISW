import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import ServiciosList from "./ServiciosList";
import Cookies from "js-cookie";
import { SERVER_NAME } from "./../../../config/constants";
import axios from "axios";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${SERVER_NAME}/getServicioByAlcaldia`, {
        params: {
          alcaldia: Cookies.get("correo"),
        },
      })
      .then((response) => {
        setServicios(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Jumbotron className='bg-primary text-white'>
        <h1>Solicitudes de servicios</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm={1} />
          <Col sm={10}>
            <h2></h2>
            <ServiciosList servicios={servicios} />
          </Col>
          <Col sm={1} />
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;
