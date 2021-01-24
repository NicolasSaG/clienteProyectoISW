import React from "react";
import { useForm } from "react-hook-form";
import { Col, Form, Row, Button } from "react-bootstrap";
import MapaRegistroArbol from "./MapaRegistroArbol";
<<<<<<< HEAD
import { SERVER_NAME } from "./../../config/constants";
import axios from "axios";
=======
import axios from "axios";
import { SERVER_NAME } from "./../../config/constants";
>>>>>>> 95511f0407098b432ad68e99dabb046061d2579e
//mapa, al dar click en el mapa obtenemos coords, direccion
//diametro, altura, estado del arbol mal, neutro bien

const RegistroArbol = () => {
  const { handleSubmit, register, setValue, errors } = useForm();

  // Funcion que se ejecuta al pasar todas las validaciones y submit
  const onSubmit = (values) => {
    // values es un objeto que posee todos los valores del formulario que tenga un 'name' asociado
    console.log(values);
<<<<<<< HEAD
    // let data = {
    //   especies: values.especie, // Especie del arbol
    //   area: values.area, // Area del area y si es un arbol la dejaremos en 3 m2
    //   sitio: values.sitio, // Sitio en donde se encuentra el arbol
    //   tipo_sue: values.tipoSuelo, // Tipo de suelo del arbol
    //   domicilio: values.domicilio, // Ubicacion del arbol
    //   fech_inic: Date.now(), // Fecha de registro
    //   altura: values.altura,
    //   diametro: values.diametro,
    //   coordenadas: { // Cooredenadas del arbol
    //     latitud: values.latitud,
    //     longitud: values.longitud
    //   }
    // }
    console.log("SENDING")
    axios
      .post(`${SERVER_NAME}/insertArbol`,  {
        especies: "Especie Prueba", // Especie del arbol
        area: "area prueba", // Area del area y si es un arbol la dejaremos en 3 m2
        sitio: "sitio prueba", // Sitio en donde se encuentra el arbol
        tipo_sue: "tipo prueba", // Tipo de suelo del arbol
        domicilio: "fecha prueba", // Ubicacion del arbol
        fech_inic: Date.now(), // Fecha de registro
        altura: "Altura prueba",
        diametro: "Diametro preuba",
        coordenadas: { // Cooredenadas del arbol
          latitud: 99.34343,
          longitud: 13.5555
        }
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (!response.data.success) {
          } else {
            window.location.href = "/mapa";
          }
        }
      });
=======
    let data = {
      especie: values.especie,
      area: values.area,
      sitio: values.sitio,
      domicilio: values.direccion,
      fech_ini: Date.now(),
      altura: values.altura,
      diametro: values.diametro,
      coordenadas: {
        latitud: values.coordLat,
        longitud: values.coordLg,
      },
    };
    console.log(data);
    axios.post(`${SERVER_NAME}/insertArbol`, data).then((response) => {
      console.log(response);
      if (response.status === 200) {
        if (!response.data.success) {
        } else {
          window.location.href = "/";
        }
      }
    });
>>>>>>> 95511f0407098b432ad68e99dabb046061d2579e
  };

  const getChildData = (data) => {
    setValue("direccion", data.direccionFormateada);
    setValue("delegacion", data.deleg);
    setValue("codigoPostal", data.postal_code);

    setValue("coordLat", data.lat);
    setValue("coordLg", data.lng);
  };

  return (
    <div align='center'>
      <h3>Registrar arbol</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicCoordLat'>
              <Form.Control
                name='coordLat'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='latitud'
              />
              {errors.coordLat && errors.coordLat.type === "required" && (
                <Form.Text className='text-danger'>
                  No se ha seleccionado un árbol en el mapa
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicCoordLg'>
              <Form.Control
                name='coordLg'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='longitud'
              />
              {errors.coordLg && errors.coordLg.type === "required" && (
                <Form.Text className='text-danger'>
                  No se ha seleccionado un árbol en el mapa
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicEspecie'>
              <Form.Control
                name='especie'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='especie'
              />
              {errors.especie && errors.especie.type === "required" && (
                <Form.Text className='text-danger'>
                  No se ingresó una especie
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicArea'>
              <Form.Control
                name='area'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='area m^2'
              />
              {errors.area && errors.area.type === "required" && (
                <Form.Text className='text-danger'>
                  No se ingresó el area que abarca el árbol
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicSitio'>
              <Form.Control
                name='sitio'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='sitio'
              />
              {errors.sitio && errors.sitio.type === "required" && (
                <Form.Text className='text-danger'>
                  No se ingresó el sitio donde está el árbol
                </Form.Text>
              )}
            </Form.Group>
          </Col>
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
              {errors.delegacion && errors.delegacion.type === "required" && (
                <Form.Text className='text-danger'>
                  No se obtuvo la delegación
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicCP'>
              <Form.Control
                name='codigoPostal'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='codigoPostal'
              />
              {errors.codigoPostal &&
                errors.codigoPostal.type === "required" && (
                  <Form.Text className='text-danger'>
                    No se obtuvo el codigo postal
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col sm lg='6'>
            <Form.Group controlId='formBasicDireccion'>
              <Form.Control
                name='direccion'
                ref={register({
                  required: true,
                })}
                type='text'
                placeholder='direccion'
              />
              {errors.direccion && errors.direccion.type === "required" && (
                <Form.Text className='text-danger'>
                  No se seleccionó una dirección
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

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
                  Ingresa el diámetro aproximado del árbol
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
                  Ingresa la altura aproximado del árbol
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Button type='submit'>Registrar arbol</Button>
      </Form>

      <div>
        <h2>Mapa:</h2>
        <MapaRegistroArbol
          center={{ latitude: 19.42303354379363, longitude: -99.1631714061342 }}
          getCoords={getChildData}
        ></MapaRegistroArbol>
      </div>
    </div>
  );
};

export default RegistroArbol;
