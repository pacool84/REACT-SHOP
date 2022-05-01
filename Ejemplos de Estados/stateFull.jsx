import React, { useState } from "react";

const Button = () => {
  const [name, setName] = useState("Hola Mundo");
  return <h1>{name}</h1>;
};

export default Button;
