import React from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './../../../login.css';

const Login = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = values => { // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
        alert(values.correo)
        alert(values.password)
    }

    return (
      <div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-offset-3 col-md-9">
                <form class="form-horizontal">
                    <span class="heading">Iniciar Sesión </span>
                    <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Nombre de Usuario o Correo Electrónico"></input>
                        <i class="fa fa-user"></i>
                        
                    </div>
                    <div class="form-group help">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Contraseña"></input>
                        <i class="fa fa-lock"></i>
                        <a href="#" class="fa fa-question-circle"></a>
                        
                    </div>
                    <div class="form-group">
                        <div class="main-checkbox">
                            <input type="checkbox" value="None" id="checkbox1" name="check"></input>
                            <label for="checkbox1"></label>
                            
                        </div>
                        <span class="text">Recuerdame</span>
                        <button type="submit" class="btn btn-default">Acceder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    );
}

export default Login;
