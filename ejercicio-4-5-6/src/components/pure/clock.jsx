import React, { useState, useEffect } from "react";

const Clock = () => {
  const initialDate = {
    fecha: new Date(),
    edad: 0,
    nombre: "facundo",
    apellidos: "angel",
  };

  useEffect(() => {
    const idTime = setInterval(tick, 1000);

    return () => {
      clearInterval(idTime);
    };
  }, []);

  const [date, setDate] = useState(initialDate);

  const tick = () => {
    setDate((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        edad,
        fecha: new Date(),
      };
    });
  };

  return (
    <div>
      <h2>Hora Actual: {date.fecha.toLocaleDateString()}</h2>
      <h3>
        {date.nombre} {date.apellidos}
      </h3>
      <h1>Edad: {date.edad}</h1>
    </div>
  );
};

export default Clock;
