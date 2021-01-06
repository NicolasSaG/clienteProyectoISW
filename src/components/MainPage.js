import React from 'react';
import { Jumbotron, Button, Container, Image, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

// Functional component
const MainPage = () => {
    const transition = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })
    const countAnimation = useSpring({ number: 224210, from: { number: 0 } })

    const history = useHistory();

    return (
        <div>
            <Jumbotron className="bg-primary text-white">
                <animated.h1 style={transition}>
                    <Row>
                        <Col sm={7}>
                            <p style={{ fontSize: "70px", fontFamily: "Asap, sans-serif" }}>¡Bienvenido a Arbolex!</p>
                            <p style={{ fontSize: "26px", textAlign: "justify" }} >
                                El sistema de arbolado de la <strong>Ciudad de México</strong> para estar enterados de nuestras áreas verdes y los árboles de los espacios públicos
                            </p>
                            <p>
                                <Button size="lg" onClick={() => history.push("/mapa")} variant="info">Mapa</Button> &nbsp;&nbsp;
                                <Button size="lg" onClick={() => history.push("/registroArbol")} variant="secondary">Registrar arbol</Button>&nbsp;&nbsp;
                                <Button size="lg" onClick={() => history.push("/registroRepresentanteAlcaldia")} variant="secondary">Registrar representante de alcaldía</Button>
                            </p>
                        </Col>
                        <Col sm={5} className="text-center">
                            <Image height="350px" src="/assets/imagenes/whiteTree.png"></Image>
                        </Col>
                    </Row>
                </animated.h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col sm={5} className="text-center">
                        <p className="h2">Nos preocupa los <strong className="text-primary">árboles</strong> tanto como a ti</p>
                        <p className="lead text-justify">
                            La Ciudad de México es uno de las ciudades con más atracción turística debido a sus lugares históricos y sus áreas verdes y arbolados que <strong>dan vida</strong> y color.
                        </p>
                        <p className="lead text-justify">
                            Las áreas verdes son definidas por la Ley como “toda superficie cubierta por vegetación natural o inducida que se localice en la Ciudad de México”, las cuales ofrecen servicios ambientales. Por lo que en armonía con el artículo 88 bis 4 de la Ley Ambiental de Protección a la Tierra, que a letra indica lo siguiente:
                        </p>
                    </Col>
                    <Col sm={7} className="text-center">
                        <Image height={400} src="/assets/imagenes/treeWP.jpg"></Image>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row className="text-center">
                    <Col >
                        <Image src="/assets/imagenes/treeGrow.gif"></Image>
                        <h1 className="text-primary"><animated.span>{countAnimation.number}</animated.span> </h1>
                        <small> árboles registrados</small>
                    </Col>
                </Row>
            </Container> <hr /><br />
            <Container>
                <Row>
                    <Col sm={7} className="text-center">
                        <Image height={400} width="100%" src="/assets/imagenes/mainImage1.jpg" ></Image>
                    </Col>

                    <Col sm={5} className="text-center">
                        <p className="h2">Ubica los árboles en la CDMX y dale <strong className="text-primary">seguimiento</strong></p>
                        <p className="lead text-justify">
                            La Ciudad de México es uno de las ciudades con más atracción turística debido a sus lugares históricos y sus áreas verdes y arbolados que <strong>dan vida</strong> y color.
                        </p>
                        <p className="lead text-justify">
                            Las áreas verdes son definidas por la Ley como “toda superficie cubierta por vegetación natural o inducida que se localice en la Ciudad de México”, las cuales ofrecen servicios ambientales. Por lo que en armonía con el artículo 88 bis 4 de la Ley Ambiental de Protección a la Tierra, que a letra indica lo siguiente:
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPage;
