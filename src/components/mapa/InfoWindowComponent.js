import { InfoWindow } from '@react-google-maps/api';
import { Fragment } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ArbolDetailsModal from './arbol/ArbolDetailsModal';

const InfoWindowComponent = ({ id, position, onClose, anchor }) => {
    const [showDetails, setShowDetails] = useState(false);

    const closeModalDetails = () => {
        setShowDetails(false);
    }

    return (
        <Fragment>
            <InfoWindow onCloseClick={() => { onClose() }} anchor={anchor}>
                <div>
                    <h3>{id}</h3>
                    {position.lat},{position.lng}<br />
                    <Button onClick={() => { setShowDetails(true) }} variant="primary">Ver más</Button>
                </div>
            </InfoWindow>
            {showDetails ? <ArbolDetailsModal onHide={closeModalDetails} /> : ""}
        </Fragment>

    );
}

export default InfoWindowComponent;
