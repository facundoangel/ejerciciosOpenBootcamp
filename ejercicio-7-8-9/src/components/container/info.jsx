import React, { useState } from "react";
import Contacto from "../pure/contacto";
import ContactoModel from "../../models/contacto.model";
import ContactoSimple from "../pure/contactoSimple";
import AddForm from "./addForm";

const Info = () => {
  let contacto1 = new ContactoModel("Juan", "Perez", "mail1@mail.com", true);
  let contacto2 = new ContactoModel("Pedro", "Perez", "mail1@mail.com", false);
  let contacto3 = new ContactoModel("Martin", "Perez", "mail1@mail.com", true);
  let contactos = [contacto1, contacto2, contacto3];

  const [contactoVisible, setContactoVisible] = useState(null);
  const [listContact, setListContact] = useState(contactos);

  const handleAddContact = (contacto) => {
    setListContact([...listContact, contacto]);
    setContactoVisible(contacto);
  };

  const handleSession = (contacto) => {
    let newContact = listContact.map((elem) => {
      if (elem === contacto) {
        elem.conectado = !elem.conectado;
      }
      return elem;
    });
    setListContact(newContact);
  };

  const handleDelete = (contacto) => {
    setListContact(listContact.filter((elem) => elem !== contacto));
  };

  return (
    <>
      <div className="container mt-5 p-3 card bg-info text-light">
        <div className="row card-body">
          <div className="col-6">
            {listContact.map((elem, index) => {
              return (
                <ContactoSimple
                  key={index}
                  pos={index}
                  contac={elem}
                  viewContact={setContactoVisible}
                  togglestatus={handleSession}
                  deleteContact={handleDelete}
                />
              );
            })}
          </div>
          <div className="col-6">
            <Contacto contac={contactoVisible} />
          </div>
        </div>
      </div>
      <AddForm
        contac={contactoVisible}
        setContacView={setContactoVisible}
        addContact={handleAddContact}
      />
    </>
  );
};

export default Info;
