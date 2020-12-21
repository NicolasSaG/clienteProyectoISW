import { InfoWindow } from '@react-google-maps/api';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ArbolDetailsModal from './arbol/ArbolDetailsModal';
import axios from 'axios';
import { SERVER_NAME } from './../../config/constants';

const InfoWindowComponent = ({ id, position, onClose, anchor }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [arbol, setArbol] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${SERVER_NAME}/getArbol`, {
            params: {
                idArbol: id
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                setArbol(response.data[0]);
            }
            setLoading(false);
        })

    }, [id])

    const closeModalDetails = () => {
        setShowDetails(false);
    }

    if (loading) return <div>Cargando</div>; else
        return (
            <Fragment>
                <InfoWindow onCloseClick={() => { onClose() }} anchor={anchor}>
                    <div>
                        <h3>{arbol.fields.especies}</h3>
                        {arbol.fields.sitio} {arbol.fields.alcaldia}<br /><br />
                        <Button onClick={() => { setShowDetails(true) }} variant="primary">Ver más</Button>
                    </div>
                </InfoWindow>
                {showDetails ? <ArbolDetailsModal arbol={arbol} onHide={closeModalDetails} /> : ""}
            </Fragment>

        );
}

export default InfoWindowComponent;
