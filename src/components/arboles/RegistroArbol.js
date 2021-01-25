import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Form, Row, Button, Container, InputGroup } from "react-bootstrap";
import MapaRegistroArbol from "./MapaRegistroArbol";
import axios from "axios";
import { SERVER_NAME } from "./../../config/constants";
import Swal from 'sweetalert2';
//mapa, al dar click en el mapa obtenemos coords, direccion
//diametro, altura, estado del arbol mal, neutro bien

const RegistroArbol = () => {
  let { handleSubmit, register, setValue, errors } = useForm();
  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();
  const [alcaldia, setAlcaldia] = useState();
  const [ubicacion, setUbicacion] = useState();

  const onSubmit = (values) => {

    if (latitud && longitud && alcaldia && ubicacion) {
      let data = {
        especies: values.especie,
        area: values.area,
        sitio: values.sitio,
        domicilio: ubicacion,
        alcaldia: alcaldia,
        fech_ini: getDateNow(),
        altura: values.altura,
        tot_arb: values.tot_arb,
        tipo_sue: values.tipo_sue,
        diametro: values.diametro,
        coordenadas: {
          latitud: latitud,
          longitud: longitud,
        },
      };
      console.log(data);
      axios.post(`${SERVER_NAME}/insertArbol`, data).then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: 'Árbol registrado con éxito',
            text: "Gracias por su aporte. Creceremos juntos poco a poco.",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          })
        } else Swal.fire('Ha ocurrido un error', 'Revise sus datos y pruebe nuevamente', 'error')
      });
    } else Swal.fire("Ubicación no válida", "Selecciona un árbol y escoga una ubicación válida", "warning");
  };

  const getDateNow = () => {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return day + '/' + month + '/' + year;

  }

  const getChildData = (data) => {
    console.log(data);
    setValue("direccion", data.direccionFormateada);
    setUbicacion(data.direccionFormateada);

    setValue("delegacion", data.deleg);
    setAlcaldia(data.deleg);

    setValue("codigoPostal", data.postal_code);

    setValue("coordLat", data.lat);
    setLatitud(data.lat);

    setValue("coordLg", data.lng);
    setLongitud(data.lng)

  };

  return (
    <div align='center'>
      <br />
      <Container>
        <Row>
          <Col sm={4}>
            <h3>Registrar arbol</h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group align="center" controlId='formBasicCoordLat'>
                <Form.Control
                  name='coordLat'
                  ref={register()}
                  type='text'
                  placeholder='latitud'
                  disabled="disabled"
                />

              </Form.Group>

              <Form.Group controlId='formBasicCoordLg'>
                <Form.Control
                  name='coordLg'
                  ref={register()}

                  type='text'
                  placeholder='longitud'
                  disabled="disabled"
                />

              </Form.Group>
              <Form.Group align="center" controlId='formBasicDelegacion'>
                <Form.Control
                  name='delegacion'
                  ref={register()}

                  type='text'
                  placeholder='Delegación'
                  disabled="disabled"
                />

              </Form.Group>
              <Form.Group align="center" controlId='formBasicCP'>
                <Form.Control
                  name='codigoPostal'
                  ref={register()}

                  type='text'
                  placeholder='codigoPostal'
                  disabled="disabled"
                />

              </Form.Group>
              <Form.Group align="center" controlId='formBasicDireccion'>
                <Form.Control
                  name='direccion'
                  ref={register()}

                  type='text'
                  placeholder='direccion'
                  disabled="disabled"
                />

              </Form.Group>
              <Form.Group align="center" controlId='formBasicEspecie'>
                <Form.Control
                  name='especie'
                  ref={register({
                    required: true,
                  })}
                  type='text'
                  placeholder='Especie del árbol'
                />
                {errors.especie && errors.especie.type === "required" && (
                  <Form.Text className='text-danger'>
                    No se ingresó una especie
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group align="center" controlId='formBasicArea'>
                <InputGroup className="mb-2">

                  <Form.Control
                    name='area'
                    ref={register({
                      required: true,
                    })}
                    type='text'
                    placeholder='Área aproximada'
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>m <sup>2</sup></InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.area && errors.area.type === "required" && (
                  <Form.Text className='text-danger'>
                    No se ingresó el area que abarca el árbol
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group align="center" controlId='formBasicSitio'>
                <Form.Control
                  name='sitio'
                  ref={register({
                    required: true,
                  })}
                  type='text'
                  placeholder='Sitio donde se encuentra el árbol'
                />
                {errors.sitio && errors.sitio.type === "required" && (
                  <Form.Text className='text-danger'>
                    No se ingresó el sitio donde está el árbol
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group align="center" controlId='formBasicEspecie'>
                <Form.Control
                  name='tipo_sue'
                  ref={register({
                    required: true,
                  })}
                  type='text'
                  placeholder='Tipo de suelo del árbol'
                />
                {errors.tipo_sue && errors.tipo_sue.type === "required" && (
                  <Form.Text className='text-danger'>
                    Ingrese un tipo de suelo, en caso de no saber, colocar DESCONOCIDO
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group align="center" controlId='formBasicEspecie'>
                <Form.Control
                  name='tot_arb'
                  ref={register({
                    required: true,
                  })}
                  type='text'
                  placeholder='Cantidad de árboles'
                />
                {errors.tot_arb && errors.tot_arb.type === "required" && (
                  <Form.Text className='text-danger'>
                    Ingrese la cantidad de árboles
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group align="center" controlId='formBasicArea'>
                <InputGroup className="mb-2">
                  <Form.Control
                    name='diametro'
                    ref={register({
                      required: true,
                    })}
                    type='text'
                    placeholder='Diámetro del árbol'
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>m</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.diametro && errors.diametro.type === "required" && (
                  <Form.Text className='text-danger'>
                   Ingrese un diámetro aproximado del árbol
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group align="center" controlId='formBasicArea'>
                <InputGroup className="mb-2">
                  <Form.Control
                    name='altura'
                    ref={register({
                      required: true,
                    })}
                    type='text'
                    placeholder='Altura del árbol'
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>m</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {errors.altura && errors.altura.type === "required" && (
                  <Form.Text className='text-danger'>
                   Ingrese una altura aproximada del árbol
                  </Form.Text>
                )}
              </Form.Group>
              <Button type='submit'>Registrar arbol</Button>
            </Form>
          </Col>
          <Col sm={8}>
            <div>
              <h2>Mapa:</h2>
              <MapaRegistroArbol
                center={{ latitude: 19.42303354379363, longitude: -99.1631714061342 }}
                getCoords={getChildData}
              ></MapaRegistroArbol>
            </div>
          </Col>

        </Row>
      </Container>


    </div >
  );
};

export default RegistroArbol;
