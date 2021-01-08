import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './../../../LoginRegistro.css';
import axios from 'axios';
import { SERVER_NAME } from './../../../config/constants';
import Swal from 'sweetalert2';

const Registro = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => {
        console.log(values);
        axios.post(`${SERVER_NAME}/registro`, {
            nombre: values.nombre,
            primerAp: values.apellidoP,
            segundoAp: values.apellidoM,
            password: values.password,
            correo: values.email,
            fechaNac: values.fecha

        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                Swal.fire('Bienvenido', 'Usuario ha Sido Registrado Con Éxito.', 'success')
            } else {
                Swal.fire('Error al Registrar', 'El Usuario Ya Existe', 'error')
            }
        })
    }

    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-4 register-left">
                    <img src="https://www.gifsanimados.org/data/media/190/ardilla-imagen-animada-0068.gif" height="150px" width="100px" alt="" />
                    <h3>Bienvenido a Nuestro Sistema de Arbolado</h3>
                    <p>Únete a nosotros y cuidemos nuestros árboles</p>

                </div>
                <div className="col-md-8 register-right">
                    {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <button className="nav-link active" id="home-tab" data-toggle="tab" >Árboles</button>
                        </li>

                    </ul> */}
                    <div className="tab-content" id="myTabContent">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Regístrate</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input ref={register({
                                                required: true
                                            })} type="text" name="nombre" className="form-control" placeholder="Nombre(s) Completo *" />
                                            {
                                                errors.nombre && errors.nombre.type === "required" &&
                                                <Form.Text className="text-danger">
                                                    Ingrese su nombre
                                                </Form.Text>
                                            }
                                        </div>

                                        <div className="form-group">
                                            <input ref={register({
                                                required: true
                                            })} type="text" name="apellidoP" className="form-control" placeholder="Apellido Paterno *" />
                                            {
                                                errors.apellidoP && errors.apellidoP.type === "required" &&
                                                <Form.Text className="text-danger">
                                                    Ingrese su Primer Apellido
                                                </Form.Text>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <input ref={register({
                                                required: true
                                            })} type="text" name="apellidoM" className="form-control" placeholder="Apellido Materno *" />
                                            {
                                                errors.apellidoM && errors.apellidoM.type === "required" &&
                                                <Form.Text className="text-danger">
                                                    Ingrese su Segundo Apellido
                                                </Form.Text>
                                            }
                                        </div>
                                        <div className="form-group">
                                            <input ref={register({
                                                required: true
                                            })} type="password" name="password" className="form-control" minlength="6" placeholder="Contraseña *" />
                                            {
                                                errors.password && errors.password.type === "required" &&
                                                <Form.Text className="text-danger">
                                                    Ingrese su Contraseña
                                                </Form.Text>
                                            }
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input ref={register({
                                                required: true
                                            })} type="email" name="email" className="form-control" placeholder="Correo Electrónico *" />
                                            {
                                                errors.email && errors.email.type === "required" &&
                                                <Form.Text className="text-danger">
                                                    Ingrese su correo electrónico
                                                </Form.Text>
                                            }
                                        </div>

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
                                        <Button type="submit" className="btnRegister" variant="primary">Registrarse</Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Registro;
