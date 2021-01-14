
import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const PasswordForm = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (values) => {



    }

    return (
        <Fragment>
            <br />
            <Form onSubmit={handleSubmit(onSubmit)} className="fuentetechnaSans">
                <div className="form-group">
                    <label htmlFor="exampleInputPass">Contraseña Actual</label>
                    <input ref={register({
                        required: true,
                    })} name="password" type="password" className="form-control" id="exampleInputPass" placeholder="Ingresa tu Contraseña Actual" autoComplete="on" />
                    {
                        errors.password && errors.password.type === "required" &&
                        <Form.Text className="text-danger">
                            Ingresa tu Contraseña Actual
                        </Form.Text>
                    }
                    <br />
                    <label htmlFor="exampleInputPassN">Nueva Contraseña</label>
                    <input ref={register({
                        required: true,
                        maxLength: 32,
                    })} name="passwordN" type="password" className="form-control" id="exampleInputPassN" placeholder="Ingresa la Nueva Contraseña" autoComplete="on" />
                    {
                        errors.passwordN && errors.passwordN.type === "required" &&
                        <Form.Text className="text-danger">
                            Ingresa la Nueva Contraseña
                        </Form.Text>
                    }
                    {
                        errors.passwordN && errors.passwordN.type === "maxLength" &&
                        <Form.Text className="text-danger">
                            Contraseña muy larga
                        </Form.Text>
                    }
                    <br />
                    <label htmlFor="exampleInputPassNR">Repite la Nueva Contraseña</label>
                    <input ref={register({
                        required: true,
                    })} name="passwordNR" onPaste={(e) => { e.preventDefault() }} type="password" className="form-control" id="exampleInputPassNR" placeholder="Repite la Nueva Contraseña" autoComplete="on" />
                    {
                        errors.passwordNR && errors.passwordNR.type === "required" &&
                        <Form.Text className="text-danger">
                            Repite la Nueva Contraseña
                        </Form.Text>
                    }
                    {
                        errors.passwordNR && errors.passwordNR.type === "validate" &&
                        <Form.Text className="text-danger">
                            Asegurate de que las constraseñas coincidan
                        </Form.Text>
                    }
                    <br />
                    <div align="center">
                        <Button type="submit" className="botonVerde">Actualizar</Button>
                    </div>
                </div>
            </Form>
        </Fragment>
    );
}

export default PasswordForm;
;
