import React, { useEffect, useState } from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// Functional component
const MainPage = () => {
    const [data, setData] = useState([]); // Similiar a this.state = en class components
    const history = useHistory();

    useEffect(() => { // Simula nuestro componentDidUpdate, componentWillReceiveProps o cualquier otra funcion
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => { setData(json) })
    }, [])

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
                </p>
            </Jumbotron>
            <Container>
                <h3>Esto es un ejemplo de un fetch con Hooks utilizando useEffect()</h3>
                {
                    data ? data.map((item) => {
                        return <div key={item.id}>{item.id}  {item.title}</div>

                    }) : "Esta cargando la informacion"
                }
            </Container>
        </div>
    );
}

export default MainPage;
