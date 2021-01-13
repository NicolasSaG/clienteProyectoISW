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
            <Form.Label>Tipo de árbol a podar: </Form.Label>
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
                  "Poda de formación de individuos jóvenes",
                  "Poda de árboles latifoliados maduros",
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
                ref={register}
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
          <Col lg='2'>
            <Form.Label>Descripción: </Form.Label>
          </Col>
          <Col lg='4'>
            <Form.Group controlId='formBasicActividadDescripcion'>
              <Form.Control
                as='textarea'
                name='actividadDescripcion'
                ref={register}
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
          <Col lg='2'>
            <Form.Label>Tipo de árbol a transplantar: </Form.Label>
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
                  "Poda de formación de individuos jóvenes",
                  "Poda de árboles latifoliados maduros",
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
            <Form.Label>Causa de transplante: </Form.Label>
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
          <Col lg='2'>
            <Form.Label>Descripción: </Form.Label>
          </Col>
          <Col lg='4'>
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
          <Col lg='2'>
            <Form.Label>Tipo de árbol a derribar: </Form.Label>
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
                  "Poda de formación de individuos jóvenes",
                  "Poda de árboles latifoliados maduros",
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
            <Form.Label>Causa de derribo: </Form.Label>
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
                  "Mejoramiento y mantenimiento de área verde pública",
                  "Afectación severa al patrimonio urbanístico y arquitectónico",
                  "Por obra pública o privada",
                  "Otro",
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
            <Form.Label>Descripción: </Form.Label>
          </Col>
          <Col lg='4'>
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
    if (watchTipoActividad === "transplante") {
      delete values.actividadTipoPoda;
    }
    if (watchTipoActividad === "derribo") {
      delete values.actividadTipoPoda;
    }
    console.log(values);
  };

  return (
    <div>
      <Jumbotron>
        <h3>Solicitud de un servicio</h3>
        <p>{id}</p>
      </Jumbotron>
      <div align='center'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className='justify-content-md-center'>
            <Col lg='2'>
              <Form.Label>Tipo de actividad: </Form.Label>
            </Col>
            <Col sm lg='4'>
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
    </div>
  );
}

export default Servicio;
