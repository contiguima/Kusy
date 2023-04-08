import React from "react";
import "../stylesheets/producto.css";

function Producto(props) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.imagen})` }}
      />
      <div className="card-text">
        <h3>{props.nombre}</h3>
        <p>Talles: {props.talles}</p>
        <p>{props.texto}</p>
        <button className="card-button">Comprar</button>
      </div>
    </div>
  );
}

export default Producto;