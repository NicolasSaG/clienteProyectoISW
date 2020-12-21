import React, { useEffect, useState, Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { SERVER_NAME } from "./../../config/constants";
import MyMapComponent from './MyMapComponent';
import PageLoading from './../layout/PageLoading';
import axios from 'axios';

const MapaArbolado = () => {

    const [arboles, setArboles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${SERVER_NAME}/getArboles`).then((response) => {
            setArboles(response.data)
            setLoading(false);
        })
    }, [])

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

    if (loading) return (<PageLoading/>); else {
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
}

export default MapaArbolado;
