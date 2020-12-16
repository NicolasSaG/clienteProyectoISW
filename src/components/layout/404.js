import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <br />
            <h1 className="text-center " >¯\_(ツ)_/¯</h1>
            <br />
            <h2 className="subtitle text-center is-size-3 ">
                404: Parece que la página que buscas no existe
            </h2>
        </Container>
    );
}

export default NotFound;
