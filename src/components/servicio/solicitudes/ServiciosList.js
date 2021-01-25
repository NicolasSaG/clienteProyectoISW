import React, { Fragment, useState } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import ServicioDetails from "./ServicioDetails";

const ServiciosList = ({ alcaldia }) => {
  const [servicioSelected, setServicioSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  let solicitudes = [
    {
      usuario: {
        nombre: "Jesus",
        apellidoP: "Medina",
        apellidoM: "Villa",
      },
      arbol: {
        ubicacion:
          "Calle Av. 100 metros, Col. Nueva Mina, 085420, Xochimilco, CDMX",
      },
      fecha: "15/02/2021",
      tipoSolicitud: "Poda",
      status: "En espera",
      descripcion:
        "El pasto ya estoy muy crecido y empieza a molestar al paso de las personas y animales. Aproximadamente 5 cm de altura en la zona de comida.",
    },
    {
      usuario: {
        nombre: "Raul",
        apellidoP: "Guantecillo",
        apellidoM: "Garcia",
      },
      arbol: {
        ubicacion:
          "Calle Av. 100 metros, Col. Nueva Mina, 085420, Xochimilco, CDMX",
      },
      fecha: "15/02/2021",
      tipoSolicitud: "Derribo",
      status: "En espera",
      descripcion:
        "El pasto ya estoy muy crecido y empieza a molestar al paso de las personas y animales. Aproximadamente 5 cm de altura en la zona de comida.",
    },
  ];

  const showModalHandler = (servicio) => {
    setShowModal(true);

    setServicioSelected(servicio);
  };
  const onHide = () => {
    setShowModal(false);
  };

  return (
    <div>
      {solicitudes
        ? solicitudes.map((data, index) => {
            return (
              <Fragment key={index}>
                <Row
                  style={
                    !data.respuestaEmpresa
                      ? { borderRadius: "15px", boxShadow: "0 0 10px #D3AAE4" }
                      : {}
                  }
                  key={index}
                >
                  <Col className='text-center' sm={1}>
                    <div>
                      <br />
                      <br />
                      <Image
                        src='https://img.icons8.com/cotton/452/tree.png'
                        style={{
                          width: "60px",
                          height: "60px",
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                        roundedCircle
                      ></Image>
                    </div>
                  </Col>
                  <Col sm={10}>
                    <div style={{ paddingLeft: "10px" }}>
                      <br />
                      <strong>
                        {data.usuario.nombre} {data.usuario.apellidoP}{" "}
                      </strong>
                      <small></small>
                      <br />
                      {data.pregunta}
                      <br />
                      <small>{data.fecha}</small>
                      <hr />
                      <div align='center'>
                        <Button
                          onClick={() => {
                            showModalHandler(data);
                          }}
                          className='botonMorado'
                          size='lg'
                          block
                        >
                          Ver detalles
                        </Button>
                      </div>
                      <br />
                    </div>
                  </Col>
                </Row>
                <br />
              </Fragment>
            );
          })
        : "No hay preguntas todavía"}
      {showModal ? (
        <ServicioDetails
          servicio={servicioSelected ? servicioSelected : {}}
          onHide={onHide}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ServiciosList;
