import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';


const ArbolDetails = ({ arbol, onHide }) => {

    return ReactDOM.createPortal(
        <Modal
            animation={false}
            show={true}
            size="lg"
            backdrop="static"
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {arbol.fields.especies} <br />
                    <span class="badge badge-secondary">{arbol.fields.categoria}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={4}>
                        <Image fluid src="https://previews.123rf.com/images/misterfullframe/misterfullframe1509/misterfullframe150900110/45679931-hermosa-zona-cubierta-de-hierba-verde-con-%C3%A1rboles-de-sombra-en-un-parque-.jpg" />
                        <small>17/02/2020 </small>
                    </Col>
                    <Col sm={8}>
                        <h5>Área cubierta: {arbol.fields.area} m<sup>2</sup></h5><br />
                        <h5>Sitio: {arbol.fields.sitio}</h5><br />
                        <h5>Tipo de suelo: {arbol.fields.tipo_sue}</h5><br />
                        <h5>Total de arboles: {arbol.fields.tot_arbu}</h5><br />
                        <h5>Ubicación: {arbol.fields.domicilio}</h5>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={()=>{window.location.href= `/solicitudServicio/${arbol._id}`}}>
                    <i className="fas fa-exclamation-circle fa-lg" /> &nbsp;
                    Hacer una solicitud del árbol</Button>
                <Button onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>, document.getElementById('modal')
    );
}

export default ArbolDetails;
