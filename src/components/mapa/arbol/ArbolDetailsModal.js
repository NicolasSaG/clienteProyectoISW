import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import Cookies from "js-cookie";

const ArbolDetails = ({ arbol, onHide }) => {
  return ReactDOM.createPortal(
    <Modal
      animation={false}
      show={true}
      size='lg'
      backdrop='static'
      onHide={onHide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {arbol.fields.especies} <br />
          <span className='badge badge-secondary'>
            {arbol.fields.categoria}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={4}>
            <Image
              fluid
              src='https://previews.123rf.com/images/misterfullframe/misterfullframe1509/misterfullframe150900110/45679931-hermosa-zona-cubierta-de-hierba-verde-con-%C3%A1rboles-de-sombra-en-un-parque-.jpg'
            />
            <small>17/02/2020 </small>
          </Col>
          <Col sm={8}>
            <h5>Área cubierta:</h5> {arbol.fields.area} m<sup>2</sup>
            <br />
            <br />
            <h5>Sitio: </h5> {arbol.fields.sitio}
            <br />
            <br />
            <h5>Tipo de suelo: </h5> {arbol.fields.tipo_sue}
            <br />
            <br />
            <h5>Total de arboles: </h5>{" "}
            {arbol.fields.tot_arbu === 0
              ? "Desconocido"
              : arbol.fields.tot_arbu}
            <br />
            <br />
            <h5>Ubicación: </h5> {arbol.fields.domicilio} <br />
            <br />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {Cookies.get("tipo") !== "admin" && Cookies.get("tipo") !== "jefe" ? (
          <Button
            variant='warning'
            onClick={() => {
              Cookies.get("tipo") === "ciudadano"
                ? (window.location.href = `/solicitudServicio/${arbol._id},${arbol.fields.alcaldia}`)
                : (window.location.href = "/login");
            }}
          >
            <i className='fas fa-exclamation-circle fa-lg' /> &nbsp; Hacer una
            solicitud del árbol
          </Button>
        ) : (
          ""
        )}
        {console.log(arbol.fields)}
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
};

export default React.memo(ArbolDetails);
