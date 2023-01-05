import PropTypes from "prop-types";

class Contacto {
  nombre;
  apellido;
  mail;
  conectado;

  constructor(nombre, apellido, mail, conectado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.conectado = conectado;
  }
}

Contacto.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  conectado: PropTypes.bool.isRequired,
};

export default Contacto;
