import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import MyMapComponent from './MyMapComponent';

const MapaArbolado = () => {

    let arboles = [{
        id: 1,
        latitude: 19.42303354379363,
        longitude: -99.16317140613423
    },
    {
        id: 2,
        latitude: 19.421664199965736,
        longitude: -99.15755598351062
    },
    {
        id: 3,
        latitude: 19.433967626858944,
        longitude: -99.13626997257076
    },
    {
        id: 4,
        latitude: 19.444975166127268,
        longitude: -99.14794294631199
    },
    {
        id: 5,
        latitude: 19.425063924244135,
        longitude: -99.15000288285455
    },
    {
        id: 6,
        latitude: 19.40919793583003,
        longitude: -99.1700872641446
    }]

    let areas = [{
        id: 1,
        latitude: 19.42303354379363,
        longitude: -99.16317140613423
    },
    {
        id: 2,
        latitude: 19.421664199965736,
        longitude: -99.15755598351062
    },
    {
        id: 3,
        latitude: 19.433967626858944,
        longitude: -99.13626997257076
    },
    {
        id: 4,
        latitude: 19.444975166127268,
        longitude: -99.14794294631199
    },
    {
        id: 5,
        latitude: 19.425063924244135,
        longitude: -99.15000288285455
    },
    {
        id: 6,
        latitude: 19.40919793583003,
        longitude: -99.1700872641446
    }]

    return (
        <div>
            <Jumbotron>
                <h1>Mapa general del arbolado CDMX</h1>
                <p>
                    Ve un mapa que muestra todas las áreas verdes y árboles de la Ciudad de México
                </p>
            </Jumbotron>
            <MyMapComponent latitude={19.42303354379363} longitude={-99.16317140613423} />
        </div>
    );
}

export default MapaArbolado;
