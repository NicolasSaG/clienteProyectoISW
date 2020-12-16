import React from "react"
import {
    GoogleMap,
    useLoadScript,
    Marker
} from "@react-google-maps/api";

import { GOOGLE_MAPS_API_KEY } from "./../../config/constants";
import { Spinner } from "react-bootstrap";

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const mapContainerStyle = {
    height: "100%",
    width: "100%",
};

const libraries = ["places"];

const MyMapComponent = (props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error. Revisa tu conexion y vuelve a intenarlo";
    if (!isLoaded) return <Spinner/>;
    return (
        <div style={{ height: `100%` }} >
            <div style={{ height: `700px` }} >
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={12}
                    center={{ lat: props.latitude, lng: props.longitude }}
                    options={options}
                    // onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    <Marker
                        position={{ lat: props.latitude, lng: props.longitude }}
                        onClick={() => {
                            
                        }}
                        icon={{
                            url: `/assets/imagenes/marker.png`,
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(50, 50),
                            scaledSize: new window.google.maps.Size(50, 50),
                        }}
                    />
                </GoogleMap>
            </div>
        </div>
    )
}
export default MyMapComponent;