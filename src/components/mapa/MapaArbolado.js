import React from 'react';
import { Fragment } from 'react';
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

    const triangleCoords = [
        {
            idArea: 1,
            coordinates: [{ lat: 19.425063924244135, lng: -99.15000288285455 },
            { lat: 19.433967626858944, lng: -99.13626997257076 },
            { lat: 19.42303354379363, lng: -99.16317140613423 }]
        },
        {
            idArea: 2,
            coordinates: [{ lat: 19.42505392744135, lng: -99.15000288283455 },
            { lat: 19.436967626858344, lng: -99.13626997357176 },
            { lat: 19.47303354379373, lng: -99.16317140614323 }]
        }
    ];

    return (
        <Fragment>
            <Jumbotron>
                <h1>Mapa general del arbolado CDMX</h1>
                <p>
                    Ve un mapa que muestra todas las áreas verdes y árboles de la Ciudad de México
                </p>
            </Jumbotron>
            <MyMapComponent items={arboles} areas={triangleCoords} center={{ latitude: 19.42303354379363, longitude: -99.1631714061342 }} />
        </Fragment>
    );
}

export default MapaArbolado;
