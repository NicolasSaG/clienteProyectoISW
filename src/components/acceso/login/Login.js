import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './../../../login.css';
import axios from 'axios';
import { SERVER_NAME } from './../../../config/constants';
import Cookies from 'js-cookie';

const Login = () => {
    const { handleSubmit, register, errors } = useForm();
    const [errorLogin, setErrorLogin] = useState(false);

    const onSubmit = values => {
        console.log(values);
        axios.post(`${SERVER_NAME}/login`, {
            username: values.correo,
            password: values.password
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                if (!response.data.success) {
                    setErrorLogin(true);
                } else {
                    setErrorLogin(false);
                    Cookies.set('session', true, { expires: 1 });
                    Cookies.set('correo', values.correo, { expires: 1 });
                    Cookies.set('user', response.data.msg, { expires: 1 });
                    // window.location.href = "/";
                }
            }
        })
    }

    return (
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-9">
                        <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                            <span className="heading">Iniciar Sesión </span>
                            <div className="form-group">
                                <input ref={register({
                                    required: true
                                })} name='correo' type="email" className="form-control" id="correo" placeholder="Nombre de Usuario o Correo Electrónico"></input>
                                <i className="fa fa-user"></i>
                                {
                                    errors.nombre && errors.nombre.type === "required" &&
                                    <Form.Text className="text-danger">
                                        Ingrese su nombre
                                                </Form.Text>
                                }
                            </div>
                            <div className="form-group help">
                                <input ref={register({
                                    required: true
                                })} name='password' type="password" className="form-control" id="password" placeholder="Contraseña"></input>
                                <i className="fa fa-lock" />
                                <p className="fa fa-question-circle"></p>
                                {
                                    errors.nombre && errors.nombre.type === "required" &&
                                    <Form.Text className="text-danger">
                                        Ingrese su nombre
                                                </Form.Text>
                                }
                                {errorLogin ? <p className="text-danger">Correo o contraseña incorrecta</p> : ""}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-default">Acceder</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
