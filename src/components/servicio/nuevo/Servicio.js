import React from "react";
import { useForm } from "react-hook-form";
import { Jumbotron, Col, Form, Row, Button, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Servicio = () => {
  const { id } = useParams();
  const { handleSubmit, register, setValue, errors, watch } = useForm();
  const watchTipoActividad = watch("actividad");

  function actividades() {
    if (watchTipoActividad === "poda") return;
  }

  const onSubmit = (values) => {
    console.log(values);
    //console.log(actividad.value);
  };

  return (
    <div>
      <Jumbotron>
        <h3>Solicitud de un servicio</h3>
        <p>{id}</p>
      </Jumbotron>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='justify-content-md-center'>
          <Col lg='2'>
            <Form.Label>Tipo de actividad: </Form.Label>
          </Col>
          <Col sm lg='2'>
            <Form.Group controlId='formBasicActividad'>
              <Form.Control
                name='actividad'
                as='select'
                ref={register({
                  required: true,
                })}
                custom
              >
                {["poda", "transplante", "derribo"].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {() => {
          //console.log(actividad.value);
        }}

        <Button type='submit'>Subir solicitud</Button>
      </Form>
    </div>
  );
};

export default Servicio;
