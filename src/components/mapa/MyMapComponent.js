import React, { Fragment } from "react"
import {
    GoogleMap,
    useLoadScript,
    Marker,
    Polygon
} from "@react-google-maps/api";

import { GOOGLE_MAPS_API_KEY } from "./../../config/constants";
import Swal from 'sweetalert2';
import PageLoading from "../layout/PageLoading";

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    // gestureHandling: 'greedy'
};
const mapContainerStyle = {
    height: "100%",
    width: "100%",
};

const libraries = ["places"];

const MyMapComponent = ({ items, areas, center }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error. Revisa tu conexion y vuelve a intentarlo";
    if (!isLoaded) return <PageLoading/>;
    return (
        <div style={{ height: `100%` }} >
            <div style={{ height: `700px` }} >
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={{ lat: center.latitude, lng: center.longitude }}
                    options={options}
                    // onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                    {
                        items ? items.map((i, index) => {
                            return <Fragment key={index}>
                                <Marker
                                    position={{ lat: i.geometry.coordinates[1], lng: i.geometry.coordinates[0] }}
                                    onClick={() => {
                                        Swal.fire('Haz dado click a un árbol', 'Arbol con coordenadas: ' + i.geometry.coordinates[1] + "," + i.geometry.coordinates[0], 'success')
                                    }}
                                    icon={{
                                        url: `/assets/imagenes/marker.png`,
                                        origin: new window.google.maps.Point(0, 0),
                                        anchor: new window.google.maps.Point(50, 50),
                                        scaledSize: new window.google.maps.Size(50, 50),
                                    }}
                                />
                            </Fragment>
                        }) : ""
                    }
                    {
                        areas ? areas.map((i, index) => {
                            return <Fragment key={index}>
                                <Polygon
                                    paths={i.coordinates}
                                    onClick={() => {
                                        Swal.fire('Haz dado click a un área', 'Area con coordenadas: ' + i.coordinates.map((c) => c.lat + "," + c.lng), 'success')
                                    }}
                                    options={{
                                        strokeColor: '#6CB315',
                                    }}
                                />
                            </Fragment>
                        }) : ""
                    }

                </GoogleMap>
            </div>
        </div>
    )
}
export default React.memo(MyMapComponent);