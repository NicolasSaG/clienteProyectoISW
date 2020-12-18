import React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './../../../LoginRegistro.css';

const Registro = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => { // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
        alert(values.correo)
        alert(values.password)
    }

    return (
      <div class="container register">
                <div class="row">
                    <div class="col-md-4 register-left">
                        <img src="https://www.gifsanimados.org/data/media/190/ardilla-imagen-animada-0068.gif" height="150px" width="100px" alt=""/>
                        <h3>Bienvenido a Nuestro Sistema de Arbolado</h3>
                        <p>Únete a nosotros y cuidemos nuestros árboles</p>
                        
                    </div>
                    <div class="col-md-8 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab"  aria-selected="false">Árboles</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="home-tab" data-toggle="tab" aria-selected="false">Seguros</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Regístrate</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Nombre(s) Completo *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Apellidos *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Contraseña *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirmar Contraseña *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked></input>
                                                    <span> Masculino </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"></input>
                                                    <span>Femenino </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Correo Electrónico *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Número Telefónico *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Selecciona tu Delegación</option>
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
                                        </div>
                                        <div class="form-group">
                                          <h7>Fecha de Nacimiento:</h7>
                                        <input type="date" name="fecha" min="1970-01-01" step="1"/>
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Registrarse"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Registro;
