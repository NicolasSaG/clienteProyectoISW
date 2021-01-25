import React, { useEffect, useState, Fragment } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { SERVER_NAME } from "./../../config/constants";
import MyMapComponent from './MyMapComponent';
import PageLoading from './../layout/PageLoading';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const MapaArbolado = () => {
    const history = useHistory();
    const [arboles, setArboles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${SERVER_NAME}/getArboles`).then((response) => {
            console.log(response)
            setArboles(response.data)
            setLoading(false);
        })
    }, [])

    const triangleCoords = [];

    const registrarArbol = () =>{
        if(Cookies.get('tipo')==="ciudadano"){
             history.push("/registroArbol");
        } else{
            history.push("/login");
        }
    }

    if (loading) return (<PageLoading />); else {
        return (
            <Fragment>
                <Jumbotron className="bg-primary text-white">
                    <h1>Mapa general del arbolado CDMX</h1>
                    <p>
                        Ve un mapa que muestra todas las áreas verdes y árboles de la Ciudad de México
                </p>
                </Jumbotron>
                <MyMapComponent items={arboles} areas={triangleCoords} center={{ latitude: 19.42303354379363, longitude: -99.1631714061342 }} />
                {Cookies.get("tipo")!=="admin" && Cookies.get("tipo")!=="admin"?<Jumbotron>
                    <h1>¿No ves un árbol en el mapa?</h1>
                    <p>
                        Ayúdanos a tener un mejor registro de todos los árboles público de la Ciudad de México
                    </p>
                    <p>
                        <Button variant="primary" onClick={()=>{registrarArbol()}}>Registrar árbol</Button>
                    </p>
                </Jumbotron>:""}
            </Fragment>
        );
    }
}

export default MapaArbolado;
