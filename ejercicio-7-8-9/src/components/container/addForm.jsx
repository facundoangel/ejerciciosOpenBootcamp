import React from "react";

const AddForm = ({ contac, setContacView, addContact }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const contactoTemp = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      mail: e.target.mail.value,
      conectado: e.target.estado.value,
    };

    setContacView(contactoTemp);
    addContact(contactoTemp);

    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-5">
            <label htmlFor="nombre">Nombre:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              id="nombre"
            />
          </div>
          <div className="form-group col-7">
            <label htmlFor="apellido">Apellido:</label>
            <input
              className="form-control"
              type="text"
              placeholder="apellido"
              id="apellido"
            />
          </div>
        </div>
        <div className="row my-4">
          <fieldset className="form-group col-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="estado"
                id="conectado"
                value="conectado"
              />
              <label className="form-check-label" htmlFor="conectado">
                Conectado
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="estado"
                id="desconectado"
                value="desconectado"
              />
              <label className="form-check-label" htmlFor="desconectado">
                Desconectado
              </label>
            </div>
          </fieldset>

          <div className="form-group col-7">
            <label htmlFor="mail">E-mail:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Ingrese E-mail"
              id="mail"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-success my-3" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
