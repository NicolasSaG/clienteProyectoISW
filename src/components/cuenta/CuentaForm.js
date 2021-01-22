import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { SERVER_NAME } from "./../../config/constants";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const CuentaForm = ({ data, setData }) => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (values) => {
        axios.put(`${SERVER_NAME}/usuario`, {
            params: {
                email: Cookies.get('correo'),
                nombre: values.nombre,
                primerAp: values.apellidoP,
                segundoAp: values.apellidoM,
                delegacion: values.estado
            }
        }).then((response) => {
            if (response.data.success) {
                setData(response.data.usuario.usuario);
                Swal.fire('Cambios realizado con éxito', "", 'success')
            } else
                Swal.fire('Ha ocurrido un error', "", 'error')
        })

    }

    return (
        <Fragment>
            <br />
            <Form onSubmit={handleSubmit(onSubmit)} className="fuentetechnaSans">
                <div className="form-group">
                    <label htmlFor="exampleInputNombre">Nombre</label>
                    <input ref={register({
                        required: true,
                        maxLength: 30,
                    })} name="nombre" className="form-control" id="exampleInputNombre" placeholder="Nombre" defaultValue={data.nombre} />
                    {
                        errors.nombre && errors.nombre.type === "required" &&
                        <Form.Text className="text-danger">
                            Ingresa tu Nombre
                        </Form.Text>
                    }
                    {
                        errors.nombre && errors.nombre.type === "maxLength" &&
                        <Form.Text className="text-danger">
                            Cadena ingresada es muy larga
                        </Form.Text>
                    }
                    <br />
                    <label htmlFor="exampleInputPat">Apellido Paterno</label>
                    <input ref={register({
                        required: true,
                        maxLength: 30,
                    })} name="apellidoP" className="form-control" id="exampleInputPat" placeholder="Apellido Paterno" defaultValue={data.primerAp} />
                    {
                        errors.apellidoP && errors.apellidoP.type === "required" &&
                        <Form.Text className="text-danger">
                            Ingresa tu Apellido Paterno
                        </Form.Text>
                    }
                    {
                        errors.apellidoP && errors.apellidoP.type === "maxLength" &&
                        <Form.Text className="text-danger">
                            Cadena ingresada es muy larga
                        </Form.Text>
                    }
                    <br />
                    <label htmlFor="exampleInputMat">Apellido Materno</label>
                    <input ref={register({
                        required: true,
                        maxLength: 30,
                    })} name="apellidoM" className="form-control" id="exampleInputMat" placeholder="Apellido Materno" defaultValue={data.segundoAp} />
                    {
                        errors.apellidoM && errors.apellidoM.type === "required" &&
                        <Form.Text className="text-danger">
                            Ingresa tu Apellido Materno
                        </Form.Text>
                    }
                    {
                        errors.apellidoM && errors.apellidoM.type === "maxLength" &&
                        <Form.Text className="text-danger">
                            Cadena ingresada es muy larga
                        </Form.Text>
                    }
                    <br />
                    <label htmlFor="exampleInputRFC">Delegación</label>
                    <Form.Group>
                        <Form.Control as="select" name="estado" ref={register({ required: true })}>
                            <option value={data.delegacion}>{data.delegacion}</option>
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
                        </Form.Control>
                    </Form.Group>
                    {
                        errors.estado && errors.estado.type === "required" &&
                        <Form.Text className="text-danger">
                            Seleccione una Opción
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

export default CuentaForm;
