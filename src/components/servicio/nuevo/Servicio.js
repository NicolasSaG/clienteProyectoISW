import React from "react";
import { useForm } from "react-hook-form";
import { Jumbotron, Col, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Servicio() {
  const { id } = useParams();
  const { handleSubmit, register, setValue, errors, watch } = useForm();
  const watchTipoActividad = watch("actividad");

  function actividades() {
    console.log("cambio");
    console.log(watchTipoActividad);
    if (watchTipoActividad === "poda") {
      return <div>inputs de poda</div>;
    } else if (watchTipoActividad === "transplante") {
      return <div>inputs de transplante</div>;
    } else if (watchTipoActividad === "derribo") {
      return <div>inputs de derribo</div>;
    }
    return;
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
              <select
                name='actividad'
                ref={register({
                  required: true,
                })}
              >
                {["", "poda", "transplante", "derribo"].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </Form.Group>
          </Col>
        </Row>

        {actividades()}

        <Button type='submit'>Subir solicitud</Button>
      </Form>
    </div>
  );
}

export default Servicio;
