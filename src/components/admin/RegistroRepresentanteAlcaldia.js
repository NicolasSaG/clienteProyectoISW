import React from 'react';
import { Card, Form, Button, Container, Jumbotron } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SERVER_NAME } from './../../config/constants';
import Swal from 'sweetalert2';

const RegistroRepresentanteAlcaldia = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        console.log(values);
        axios.post(`${SERVER_NAME}/registro`, {
            nombre: values.nombre,
            primerAp: values.apellidoPat,
            segundoAp: values.apellidoMat,
            password: values.password,
            correo: values.email,
            fechaNac: values.fecha,
            delegacion: values.delegacion,
            tipodeusuario: "jefe"

        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                if (response.data.errors.length === 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Se ha registrado exitosamente',
                        confirmButtonText: `OK`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location.href = "/";
                        }
                    })
                } else {
                    Swal.fire('Error al Registrar', 'El Usuario Ya Existe', 'error')

                }
            }

        })
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
                                    <Form.Control type="password" name="password" minLength="6" autoComplete="on" ref={register({
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
                                <div className="form-group">
                                    <select ref={register({
                                        required: true
                                    })} name="delegacion" className="form-control">
                                        <option defaultChecked className="hidden" selected value="">Selecciona tu Delegación *</option>
                                        <option>Álvaro Obregón</option>
                                        <option>Azcapotzalco</option>
                                        <option>Benito Juárez</option>
                                        <option>Coyoacán</option>
                                        <option>Cuajimalpa</option>
                                        <option>Cuauhtémoc</option>
                                        <option>Gustavo A.Madero</option>
                                        <option>Iztacalco</option>
                                        <option>Iztapalapa</option>
                                        <option>Magdalena Contreras</option>
                                        <option>Miguel Hidalgo</option>
                                        <option>Milpa Alta</option>
                                        <option>Tláhuac</option>
                                        <option>Tlalpan</option>
                                        <option>Venustiano Carranza</option>
                                        <option>Xochimilco</option>

                                    </select>
                                    {
                                        errors.delegacion && errors.delegacion.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Seleccione su delegación
                                                </Form.Text>
                                    }
                                </div>
                                <div className="form-group">
                                    <h5>Fecha de Nacimiento:</h5>
                                    <input ref={register({
                                        required: true
                                    })} type="date" name="fecha" min="1970-01-01" step="1" />
                                    {
                                        errors.fecha && errors.fecha.type === "required" &&
                                        <Form.Text className="text-danger">
                                            Seleccione su fecha de nacimiento
                                                </Form.Text>
                                    }
                                </div>
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
