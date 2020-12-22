import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


// Functional component
const MainPage = () => {
    const history = useHistory();

    return (
        <div>
            <Jumbotron>
                <h1>Bienvenido a Arbolex</h1>
                <p>
                    El sistema de arbolado de la Ciudad de México para estar enterados de nuestras áreas verdes y los árboles de los espacios públicos
                </p>
                <p>
                    <Button onClick={()=>history.push("/login")} variant="primary">Login</Button>  &nbsp;
                    <Button onClick={()=>history.push("/registro")} variant="secondary">Registro</Button>  &nbsp;
                    <Button onClick={()=>history.push("/mapa")} variant="success">Mapa</Button>
                    <Button onClick={()=>history.push("/registroArbol")} variant="secondary">Registrar arbol</Button>
                </p>
            </Jumbotron>
            <Container>
                <h3>Esto es un ejemplo de un fetch con Hooks utilizando useEffect()</h3>
            </Container>
        </div>
    );
}

export default MainPage;
