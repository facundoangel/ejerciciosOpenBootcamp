import React from "react";
import contactoModel from "../../models/contacto.model";
import PropTypes from "prop-types";

const Contacto = ({ contac }) => {
  return (
    <>
      <h2 className="h4 mb-4">Nombre: {contac?.nombre}</h2>
      <h2 className="h4 mb-4">Apellido: {contac?.apellido}</h2>
      <h2 className="h4 mb-4">Mail: {contac?.mail}</h2>
      <h2 className="h4 mb-4">Conectado: {contac?.conectado ? "Sí" : "No"}</h2>
    </>
  );
};

Contacto.prototype = {
  con: PropTypes.instanceOf(contactoModel).isRequired,
};

export default Contacto;
