import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Row, Col, Image, Button } from 'react-bootstrap';

const ServicioDetails = ({ servicio, onHide }) => {
    console.log(servicio);
    return ReactDOM.createPortal(
        <Modal
            show={true}
            size="lg"
            backdrop="static"
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {servicio.tipoSolicitud} <br />
                    <span className="badge badge-secondary">{servicio.status}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={4}>
                        <Image fluid src="https://previews.123rf.com/images/misterfullframe/misterfullframe1509/misterfullframe150900110/45679931-hermosa-zona-cubierta-de-hierba-verde-con-%C3%A1rboles-de-sombra-en-un-parque-.jpg" />
                        <small>Realizaldo el {servicio.fecha}</small>
                    </Col>
                    <Col sm={8}>
                        <h5>Descripción: </h5> {servicio.descripcion} <br /> <br />
                        {/* <h5>Área cubierta: {servicio.arbol.area} m<sup>2</sup></h5><br />
                        <h5>Sitio: {servicio.arbol.sitio}</h5><br />
                        <h5>Tipo de suelo: {servicio.arbol.tipo_sue}</h5><br />
                        <h5>Total de servicioes: {servicio.arbol.tot_arbu}</h5><br /> */}
                        <h5>Ubicación: </h5>{servicio.arbol.ubicacion}
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={() => { window.location.href = `/solicitudServicio/${servicio._id}` }}>
                    <i className="fas fa-exclamation-circle fa-lg" /> &nbsp;
                    Marcar como en proceso</Button>
                <Button onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>, document.getElementById('modal')
    );
}

export default React.memo(ServicioDetails);
