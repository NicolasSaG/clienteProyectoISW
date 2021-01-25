import React from "react";
import ReactDOM from "react-dom";
import { Modal, Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";
import { SERVER_NAME } from "./../../../config/constants";

const ServicioDetails = ({ servicio, onHide }) => {
  console.log(servicio);

  const actulizarEstadoDeServicio = () => {
    let nuevoEstado = "";
    if (servicio.estado === "Procesando reporte") {
      nuevoEstado = "Realizandose";
    } else if (servicio.estado === "Realizandose") {
      nuevoEstado = "Terminado";
    }

    const servicioActualizado = {
      idServicio: servicio._id,
      estado: nuevoEstado,
    };
    axios
      .post(`${SERVER_NAME}/updateServicio`, servicioActualizado)
      .then((response) => {
        console.log(response.data);
        window.location.href = `/solicitudesServicios`;
      });
  };

  const buttonActualizarEstado = () => {
    if (servicio.estado === "Procesando reporte") {
      return (
        <div>
          <Button
            variant='warning'
            onClick={() => {
              actulizarEstadoDeServicio();
            }}
          >
            <i className='fas fa-exclamation-circle fa-lg' /> &nbsp; Marcar como
            Realizandose
          </Button>
        </div>
      );
    } else if (servicio.estado === "Realizandose") {
      return (
        <div>
          <Button
            variant='warning'
            onClick={() => {
              actulizarEstadoDeServicio();
            }}
          >
            <i className='fas fa-exclamation-circle fa-lg' /> &nbsp; Marcar como
            Terminado
          </Button>
        </div>
      );
    }

    return <div></div>;
  };
  return ReactDOM.createPortal(
    <Modal
      show={true}
      size='lg'
      backdrop='static'
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {servicio.actividad} - {servicio.actividadTipoArbol}
          <br />
          <span className='badge badge-secondary'>{servicio.estado}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={4}>
            <Image
              fluid
              src='https://previews.123rf.com/images/misterfullframe/misterfullframe1509/misterfullframe150900110/45679931-hermosa-zona-cubierta-de-hierba-verde-con-%C3%A1rboles-de-sombra-en-un-parque-.jpg'
            />
            <small>Realizaldo el {/*servicio.fecha*/}</small>
          </Col>
          <Col sm={8}>
            <h5>Descripción: </h5> {servicio.actividadDescripcion} <br /> <br />
            <h5>Tipo: {servicio.actividadTipoPoda} </h5>
            <br />
            <h5>Causa: {servicio.actividadCausa}</h5>
            <br />
            <h5>Alcaldía: {servicio.alcaldia}</h5>
            <h5>ID de servicio: {servicio._id}</h5>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {buttonActualizarEstado()}

        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
};

export default React.memo(ServicioDetails);
