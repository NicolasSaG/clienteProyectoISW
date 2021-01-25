import React from "react";
import { Card, Form, Button, Container, Jumbotron } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SERVER_NAME } from "./../../config/constants";
import Swal from "sweetalert2";

const RegistroAdministrador = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(`${SERVER_NAME}/registroAdministrador`, {
        email: values.email,
        nombre: values.nombre,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data.errors.length === 0) {
            Swal.fire({
              icon: "success",
              title: "Se ha registrado el administrador",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/";
              }
            });
          } else {
            Swal.fire(
              "Error al Registrar",
              "El administrador Ya Existe",
              "error"
            );
          }
        }
      });
  };

  return (
    <div>
      <Jumbotron className='bg-primary text-white'>
        <h3>Registar administrador</h3>
      </Jumbotron>
      <Container>
        <Card className='fondoGris fuentetechnaSans'>
          <Card.Body>
            <h1 align='left'>Administrador</h1>
            <Container>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <Form.Group controlId='nombre'>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    ref={register({
                      required: true,
                    })}
                    placeholder='Correo electrónico'
                    
                  />
                  {errors.email && errors.email.type === "required" && (
                    <Form.Text className='text-danger'>
                      Ingrese un correo electrónico
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId='nombre'>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name='nombre'
                    type='text'
                    ref={register({
                      required: true,
                      maxLength: 30,
                    })}
                    placeholder='Nombre de administrador'
                  />
                  {errors.nombre && errors.nombre.type === "required" && (
                    <Form.Text className='text-danger'>
                      Ingrese un nombre
                    </Form.Text>
                  )}
                  {errors.nombre && errors.nombre.type === "maxLength" && (
                    <Form.Text className='text-danger'>
                      Cadena ingresada es muy larga
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    minLength='6'
                    autoComplete='on'
                    ref={register({
                      required: true,
                      maxLength: 32,
                    })}
                    placeholder='Contraseña'
                  />
                  {errors.password && errors.password.type === "required" && (
                    <Form.Text className='text-danger'>
                      Ingrese una contraseña
                    </Form.Text>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <Form.Text className='text-danger'>
                      Contraseña muy larga
                    </Form.Text>
                  )}
                </Form.Group>
                <div className='text-center'>
                  <Button type='submit' className='botongrisMorado' size='lg'>
                    Registrar
                  </Button>
                </div>
                <br />
              </Form>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RegistroAdministrador;
