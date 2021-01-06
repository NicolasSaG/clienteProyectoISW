import React from 'react';
import { Card, Form, Button, Container, Jumbotron } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const RegistroRepresentanteAlcaldia = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = async values => {


    }
    return (
        <div>
            <Jumbotron className="bg-primary text-white">
                <h3>Registar un representante de alcaldía</h3>
            </Jumbotron>
            <Container>
                <Card className="fondoGris fuentetechnaSans">
                    <Card.Body>
                        <h1 align="left">Representante de alcaldía</h1>
                        <Container >
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <br />
                                <Form.Group controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name="nombre" type="text" ref={register({
                                        required: true,
                                        maxLength: 30,
                                    })} placeholder="Escribe tu nombre" />
                                    {
                                        errors.nombre && errors.nombre.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Ingrese su nombre
                                        </Form.Text>
                                    }
                                    {
                                        errors.nombre && errors.nombre.type === "maxLength" &&
                                        <Form.Text className="text-danger">
                                            Cadena ingresada es muy larga
                                        </Form.Text>
                                    }
                                </Form.Group>
                                <Form.Group controlId="apellidoPat">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control name="apellidoPat" type="text" ref={register({
                                        required: true,
                                        maxLength: 30,
                                    })} placeholder="Escribe tu apellido paterno" />
                                    {
                                        errors.apellidoPat && errors.apellidoPat.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Ingrese su apellido paterno
                                        </Form.Text>
                                    }
                                    {
                                        errors.apellidoPat && errors.apellidoPat.type === "maxLength" &&
                                        <Form.Text className="text-danger">
                                            Cadena ingresada es muy larga
                                        </Form.Text>
                                    }
                                </Form.Group>
                                <Form.Group controlId="apellidoMat">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control name="apellidoMat" type="text" ref={register({
                                        required: true,
                                        minLength: 2,
                                        maxLength: 30,
                                    })} placeholder="Escribe tu apellido materno" />
                                    {
                                        errors.apellidoMat && errors.apellidoMat.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Ingrese su apellido materno
                                        </Form.Text>
                                    }
                                    {
                                        errors.apellidoMat && errors.apellidoMat.type === "minLength" &&
                                        <Form.Text className="text-danger">
                                            Cadena ingresada es muy corta
                                        </Form.Text>
                                    }
                                    {
                                        errors.apellidoMat && errors.apellidoMat.type === "maxLength" &&
                                        <Form.Text className="text-danger">
                                            Cadena ingresada es muy larga
                                        </Form.Text>
                                    }
                                </Form.Group>
                                <Form.Label>Género</Form.Label>
                                <fieldset   >
                                    <label>
                                        <input ref={register({
                                            required: true
                                        })} name="genero" type="radio" value="M" /> M
                                    </label> &nbsp; &nbsp;
                                    <label>
                                        <input ref={register({
                                            required: true
                                        })} name="genero" type="radio" value="F" /> F
                                    </label>
                                    {
                                        errors.genero && errors.genero.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Seleccione una opción
                                        </Form.Text>
                                    }
                                </fieldset>

                                <Form.Group controlId="telefono">
                                    <Form.Label>Teléfono (Opcional)</Form.Label>
                                    <Form.Control name="telefono" type="text" ref={register({
                                        // required: true,
                                        pattern: /^([\s\d]+)$/,
                                        minLength: 10,
                                        maxLength: 15,
                                    })} placeholder="Escribe tu teléfono" />
                                    {
                                        errors.telefono && errors.telefono.type === "pattern" &&
                                        <Form.Text className="text-danger">
                                            Teléfono inválido
                                        </Form.Text>
                                    }
                                    {
                                        errors.telefono && errors.telefono.type === "minLength" &&
                                        <Form.Text className="text-danger">
                                            Teléfono inválido
                                        </Form.Text>
                                    }
                                    {
                                        errors.telefono && errors.telefono.type === "maxLength" &&
                                        <Form.Text className="text-danger">
                                            Teléfono inválido
                                        </Form.Text>
                                    }
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control name="email" ref={register({
                                        required: true,
                                    })}
                                        type="email" placeholder="Ingresa tu correo Electrónico" />
                                    {
                                        errors.email && errors.email.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Ingrese un correo electrónico
                                        </Form.Text>
                                    }
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="password" autoComplete="on" ref={register({
                                        required: true,
                                        maxLength: 32,
                                    })} placeholder="Contraseña" />
                                    {
                                        errors.password && errors.password.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Ingrese una contraseña
                                        </Form.Text>
                                    }
                                    {
                                        errors.password && errors.password.type === "maxLength" &&
                                        <Form.Text className="text-danger">
                                            Contraseña muy larga
                                        </Form.Text>
                                    }
                                </Form.Group>

                                <div className="text-center">
                                    <Button type="submit" className="botongrisMorado" size="lg">
                                        Registrarse
                                    </Button>
                                </div>
                                <br />
                            </Form>
                        </Container >
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default RegistroRepresentanteAlcaldia;
