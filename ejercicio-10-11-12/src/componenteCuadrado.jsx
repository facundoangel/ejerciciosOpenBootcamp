import React, { useState, useRef } from "react";

const ComponenteCuadrado = () => {
  var intervalId = useRef(null);
  const [colors, setColors] = useState({ r: 255, g: 0, b: 0 });

  const styleSquad = {
    width: "100px",
    height: "100px",
    backgroundColor: `rgb(${colors.r},${colors.g},${colors.b})`,
  };

  const handleChangeColor = () => {
    intervalId.current = setInterval(() => {
      let red = Math.floor(Math.random() * 255 + 1);
      let green = Math.floor(Math.random() * 255 + 1);
      let blue = Math.floor(Math.random() * 255 + 1);

      setColors({ r: red, g: green, b: blue });
    }, 100);
  };

  const handleStopChangeColor = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <h2>Ejercicio de las sesiones 10, 11 y 12 de OpenBootcamp</h2>
      <div
        onMouseEnter={handleChangeColor}
        onMouseLeave={handleStopChangeColor}
        onDoubleClick={handleStopChangeColor}
        style={styleSquad}
      ></div>
      <p>
        1)Entrar en el cuadrado con el mouse para generar cambio de colores
        random
      </p>
      <p>2)Salir del cuadrado para parar ese cambiod e colores</p>
      <p>3)Doble click en el cuadrado para parar ese cambiod e colores</p>
    </>
  );
};

export default ComponenteCuadrado;
