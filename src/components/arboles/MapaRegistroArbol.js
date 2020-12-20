import React from "react";
import axios from "axios";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "./../../config/constants";
import { Spinner } from "react-bootstrap";

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  gestureHandling: "greedy",
};

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const libraries = ["places"];

const MapaRegistroArbol = ({ center, getCoords }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const verDatos = (values) => {
    // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
    console.log(values.latLng.lat());
    console.log(values.latLng.lng());
    // const geodecode =
    //   "https://maps.googleapis.com/maps/api/geocode/json?latlng";
    // axios
    //   .get(
    //     `${geodecode}=${values.latLng.lat()},${values.latLng.lng()}&key=${GOOGLE_MAPS_API_KEY}`
    //   )
    //   .then((res) => {
    //     const dir = res.data;
    //     console.log(dir);
    //   });

    getCoords(values);
  };

  if (loadError) return "Error. Revisa tu conexion y vuelve a intentarlo";
  if (!isLoaded) return <Spinner />;
  return (
    <div style={{ height: `100%` }}>
      <div style={{ height: `700px` }}>
        <GoogleMap
          id='map'
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={{ lat: center.latitude, lng: center.longitude }}
          options={options}
          onLoad={onMapLoad}
          onClick={verDatos}
        ></GoogleMap>
      </div>
    </div>
  );
};
export default React.memo(MapaRegistroArbol);
