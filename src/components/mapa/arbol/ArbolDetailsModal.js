import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';


const ArbolDetails = ({ onHide }) => {

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
                    Árbol de la noche Triste
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={4}>
                        <Image fluid src="https://de10.com.mx/sites/default/files/field/image/arbol-de-la-noche-triste-de-tacuba.jpg" />
                        <small>17/02/2020 </small>
                    </Col>
                    <Col sm={8}>
                        <h5>Altura: 450 cm</h5><br />
                        <h5>Madera: Roble</h5><br />
                        <h5>Ubicación: Av. 100 metro 1020 Roma, Ciudad de México</h5>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={onHide}>
                    <i className="fas fa-exclamation-circle fa-lg"/> &nbsp;
                    Hacer una solicitud del árbol</Button>
                <Button onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
        , document.getElementById('modal')
    );
}

export default ArbolDetails;
