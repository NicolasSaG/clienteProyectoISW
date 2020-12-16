import React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './../../../login.css';

const Registro = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => { // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
        alert(values.correo)
        alert(values.password)
    }

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <Form className="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
                            <span className="login100-form-logo">
                                <i className="zmdi zmdi-landscape"></i>
                            </span>
                            <br />
                            <span className="login100-form-title p-b-34 p-t-27">
                                Iniciar Sesión
					        </span>
                            <br />
                            <Row align="center">
                                <Col sm={12}>
                                    <div className="input-group">
                                        <Form.Control name="email"
                                            ref={register({
                                                required: true
                                                // Aqui se pueden agregar otros tipos de validaciones como min, max, minLength, maxLenght, pattern(Regex) y abajo es necesario poner el codigo nedcesario para mostrar el mensaje para cada tipo de validacion
                                            })}
                                            type="email" placeholder="Ingresa tu correo electrónico" />

                                    </div>
                                    {
                                        errors.email && errors.email.type === "required" &&
                                        <Form.Text className="font-weight-bold text-light">
                                            Ingresa un correo electrónico
                                            </Form.Text>
                                    }
                                    <br />
                                    <div className="input-group">
                                        <Form.Control name="password"
                                            ref={register({
                                                required: true
                                            })}
                                            type="password" placeholder="Ingresa tu Contraseña" autoComplete="on" />
                                    </div>
                                    {
                                        errors.password && errors.password.type === "required" &&
                                        <Form.Text className="font-weight-bold text-light">
                                            Ingresa tu contraseña
                                            </Form.Text>
                                    }
                                    <br />
                                    <Button type="submit" size="lg" variant="secondary"> <strong>Iniciar Sesión</strong></Button>
                                    <br />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;
