import React from "react";
import { useForm } from "react-hook-form";
import { Jumbotron, Col, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Servicio() {
  const { id } = useParams();
  const { handleSubmit, register, setValue, errors, watch } = useForm();
  const watchTipoActividad = watch("actividad");

  const inputsPoda = () => {
    return (
      <div>
        <Row className='justify-content-md-center'>
          <Col lg='2'>
            <Form.Label>Tipo de arbol a podar: </Form.Label>
          </Col>
          <Col sm lg='4'>
            <Form.Group controlId='formBasicActividadTipoArbol'>
              <Form.Control
                name='actividadTipoArbol'
                as='select'
                ref={register({
                  required: true,
                })}
                custom
              >
                {[
                  " Poda de formacion de individuos jovenes",
                  "Poda de arboles latifoliados maduros",
                ].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col lg='2'>
            <Form.Label>Tipo de poda: </Form.Label>
          </Col>
          <Col sm lg='4'>
            <Form.Group controlId='formBasicActividadTipoPoda'>
              <Form.Control
                name='actividadTipoPoda'
                as='select'
                ref={register({
                  required: true,
                })}
                custom
              >
                {[
                  "Limpieza de copa",
                  "Restauración de copa",
                  "Aclareo de copa",
                  "Elevación de copa",
                  "Reducción de copa",
                  "Poda bajo cableado eléctrico aéreo",
                  "Poda de raíces",
                ].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col lg='2'>
            <Form.Label>Causa de poda: </Form.Label>
          </Col>
          <Col sm lg='4'>
            <Form.Group controlId='formBasicActividadCausa'>
              <Form.Control
                name='actividadCausa'
                as='select'
                ref={register({
                  required: true,
                })}
                custom
              >
                {[
                  "Riesgo",

                  "Estado fitosanitario",

                  "Restauración de estrucutura",

                  "Afectación de infraestructura, equipamiento y servicios urbanos",

                  "Mantenimiento",
                ].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <Form.Group controlId='formBasicActividadDescripcion'>
              <Form.Control
                as='textarea'
                name='actividadDescripcion'
                ref={register({
                  required: false,
                })}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };

  const inputsTransplante = () => {
    return (
      <div>
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <Form.Group controlId='formBasicActividadDescripcion'>
              <Form.Control
                as='textarea'
                name='actividadDescripcion'
                ref={register({
                  required: false,
                })}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };

  const inputsDerribo = () => {
    return (
      <div>
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <Form.Group controlId='formBasicActividadDescripcion'>
              <Form.Control
                as='textarea'
                name='actividadDescripcion'
                ref={register({
                  required: false,
                })}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };

  function actividades() {
    console.log("cambio");
    console.log(watchTipoActividad);
    if (watchTipoActividad === "poda") {
      return inputsPoda();
    } else if (watchTipoActividad === "transplante") {
      return inputsTransplante();
    } else if (watchTipoActividad === "derribo") {
      return inputsDerribo();
    } else {
      return inputsPoda();
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
              <Form.Control
                as='select'
                custom
                name='actividad'
                ref={register}
                defaultValue='poda'
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

        {actividades()}

        <Button type='submit'>Subir solicitud</Button>
      </Form>
    </div>
  );
}

export default Servicio;
