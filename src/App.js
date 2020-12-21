import React, { Suspense, lazy } from "react";
import './App.scss';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import PageLoading from './components/layout/PageLoading';


const MainPage = lazy(() => import('./components/MainPage'));
const Login = lazy(() => import('./components/acceso/login/Login'));
const Registro = lazy(() => import('./components/acceso/registro/Registro'));
const RegistroArbol = lazy(() => import('./components/arboles/RegistroArbol'));
const Navbar = lazy(() => import('./components/layout/NavBar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const NotFound = lazy(() => import('./components/layout/404'));
const MapaArbolado  = lazy(() => import('./components/mapa/MapaArbolado'));
const SolicitudServicio  = lazy(() => import('./components/servicio/nuevo/Servicio'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/mapa" component={MapaArbolado} />
            <Route exact path="/registroArbol" component={RegistroArbol} />
            <Route exact path="/solicitudServicio/:id" component={SolicitudServicio} />
            {/* Routes ...... */}
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
