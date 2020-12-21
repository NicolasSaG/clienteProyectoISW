import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Servicio = () => {
    const { id } = useParams();
    return (
        <div>
            <Jumbotron>
                <h3>Solicitud de un servicio</h3>
                <p>{id}</p>
            </Jumbotron>
        </div>
    );
}

export default Servicio;
