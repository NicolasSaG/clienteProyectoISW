import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { handleSubmit, register, errors } = useForm(); // Hook que permite hacer la validacion con react-hook-form

    // Funcion que se ejecuta al pasar todas las validaciones y submit
    const onSubmit = values => { // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
        alert(values.correo)
        alert(values.password)
    }

    return (
        <div align="center">
            <br />
            <h3>Iniciar Sesión</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="justify-content-md-center">
                    <Col sm lg="6" >
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Control name="email"
                                ref={register({
                                    required: true
                                    // Aqui se pueden agregar otros tipos de validaciones como min, max, minLength, maxLenght, pattern(Regex) y abajo es necesario poner el codigo nedcesario para mostrar el mensaje para cada tipo de validacion
                                })}
                                type="email" placeholder="Ingresa tu correo electrónico" />
                            {
                                errors.email && errors.email.type === "required" &&
                                <Form.Text className="text-danger">
                                    Ingresa un correo electrónico
                                    </Form.Text>
                            }
                            {/* Se agregan las validacioens tantas veces como lo indicamos en el register */}
                            {/* {
                                errors.email && errors.email.type === "min" &&
                                <Form.Text className="text-danger">
                                    El email es muy corto
                                    </Form.Text>
                            } */}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm lg="6">
                        <Form.Group controlId="formBasicPassword" >
                            <Form.Control name="password"
                                ref={register({
                                    required: true
                                })}
                                type="password" placeholder="Ingresa tu Contraseña" autoComplete="on" />
                            {
                                errors.password && errors.password.type === "required" &&
                                <Form.Text className="text-danger">
                                    Ingresa tu contraseña
                                </Form.Text>
                            }
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <Button type="submit" >
                    Iniciar Sesión
                </Button>
            </Form>
        </div>
    );
}

export default Login;
