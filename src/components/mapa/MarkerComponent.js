import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';
import InfoWindowsComponent from './InfoWindowComponent';

const MarkerComponent = ({ position, icon, id }) => {
    const [showInfo, setShowInfo] = useState(false);

    const closeInfoWindow = () => {
        setShowInfo(false);
    }
    return (
        <Marker key={`marker-${id}`} position={position} clo onClick={() => { setShowInfo(true) }} icon={icon}>
            {showInfo ? <InfoWindowsComponent id={id} position={position} onClose={closeInfoWindow} /> : ""}
        </Marker>

    );
}

export default React.memo(MarkerComponent);
