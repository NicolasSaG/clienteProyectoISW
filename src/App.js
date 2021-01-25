import React, { Suspense, lazy } from "react";
import "./App.scss";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import PageLoading from "./components/layout/PageLoading";
import Navbar from "./components/layout/NavBar";

const MainPage = lazy(() => import("./components/MainPage"));
const Login = lazy(() => import("./components/acceso/login/Login"));
const Registro = lazy(() => import("./components/acceso/registro/Registro"));
const RegistroArbol = lazy(() => import("./components/arboles/RegistroArbol"));
const RegistroAdministrador = lazy(() =>
  import("./components/admin/RegistroAdministrador")
);
const Footer = lazy(() => import("./components/layout/Footer"));
const NotFound = lazy(() => import("./components/layout/404"));
const MapaArbolado = lazy(() => import("./components/mapa/MapaArbolado"));
const SolicitudServicio = lazy(() =>
  import("./components/servicio/nuevo/Servicio")
);
const RepresentanteAlcadia = lazy(() =>
  import("./components/admin/RegistroRepresentanteAlcaldia")
);
const ConfigCuentaUsuario = lazy(() =>
  import("./components/cuenta/CuentaUsuario")
);
const SolicitudesServicios = lazy(() =>
  import("./components/servicio/solicitudes/Servicios")
);
// const SolicitudesServiciosCiudadanos = lazy(() =>
//   import("./components/servicio/solicitudes/ServiciosCiudadano")
// );

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registro' component={Registro} />
            <Route exact path='/mapa' component={MapaArbolado} />
            <Route exact path='/registroArbol' component={RegistroArbol} />
            <Route
              exact
              path='/registroRepresentanteAlcaldia'
              component={RepresentanteAlcadia}
            />
            <Route
              exact
              path='/solicitudServicio/:id,:alcaldia'
              component={SolicitudServicio}
            />
            <Route exact path='/miCuenta' component={ConfigCuentaUsuario} />
            <Route
              exact
              path='/solicitudesServicios'
              component={SolicitudesServicios}
            />
            <Route
              exact
              path='/registroAdministrador'
              component={RegistroAdministrador}
            />
            {/* Routes ...... */}
            <Route exact path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
