import React from "react";
import { useForm } from "react-hook-form";
import { Col, Form, Row, Button } from "react-bootstrap";
import MapaRegistroArbol from "./MapaRegistroArbol";

//mapa, al dar click en el mapa obtenemos coords, direccion
//diametro, altura, estado del arbol mal, neutro bien

const RegistroArbol = () => {
  const { handleSubmit, register, setValue, errors } = useForm();

  // Funcion que se ejecuta al pasar todas las validaciones y submit
  const onSubmit = (values) => {
    // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
    alert(values.diametro);
    alert(values.password);
  };

  const sendCoordsHandler = (coordsObtenidas) => {
    alert(coordsObtenidas);
  };

  return (
    <div align='center'>
      <h3>Registrar arbol</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicDiametro'>
              <Form.Control
                name='diametro'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='Diametro'
              />
              {errors.diametro && errors.diametro.type === "required" && (
                <Form.Text className='text-danger'>
                  Ingresa el diametro aproximado del arbol
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicAltura'>
              <Form.Control
                name='altura'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='altura'
              />
              {errors.altura && errors.altura.type === "required" && (
                <Form.Text className='text-danger'>
                  Ingresa la altura aproximado del arbol
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col></Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicDelegacion'>
              <Form.Control
                name='delegacion'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='delegacion'
              />
              {errors.altura && errors.delegacion.type === "required" && (
                <Form.Text className='text-danger'>
                  Ingresa la delegacion donde se encuentra el arbol
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col></Col>
        </Row>

        <Button type='submit'>Registrar arbol</Button>
      </Form>

      <div>
        <h2>Mapa:</h2>
        <MapaRegistroArbol
          center={{ latitude: 19.42303354379363, longitude: -99.1631714061342 }}
        ></MapaRegistroArbol>
        <button
          onClick={() => setValue("delegacion", "miguel hidalgo")}
        ></button>
      </div>
    </div>
  );
};

export default RegistroArbol;
