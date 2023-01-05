import React from "react";

const styled = {
  transform: "translateY(-100%)",
  cursor: "pointer",
};

const ContactoSimple = ({
  contac,
  pos,
  viewContact,
  togglestatus,
  deleteContact,
}) => {
  return (
    <p className="d-flex justify-content-between align-items-center fs-3">
      Contacto {pos + 1}
      <span className="botones">
        <i
          className="ms-2 bi bi-trash3 fs-5 bg-danger p-1 px-2 rounded-circle"
          style={styled}
          onClick={() => {
            deleteContact(contac);
          }}
        ></i>
        <i
          className="ms-2 bi bi-eye fs-5 bg-warning p-1 px-2 rounded-circle"
          style={styled}
          onClick={() => viewContact(contac)}
        ></i>
        <i
          className={`ms-2 bi bi-toggle-${
            contac?.conectado ? "on" : "off"
          } fs-5 ${
            contac?.conectado ? "bg-success" : "bg-primary"
          } p-1 px-2 rounded-circle`}
          style={styled}
          onClick={() => togglestatus(contac)}
        ></i>
      </span>
    </p>
  );
};

export default ContactoSimple;
