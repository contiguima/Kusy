import React, { useState } from "react";
import "../stylesheets/slider.css";

function Slider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productos = props.productos;

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? productos.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === productos.length - 1 ? 0 : currentIndex + 1
    );
  };

  return productos.length > 0 ? (
    <div className="slider">
      <button className="prev" onClick={handlePrev}>
        ←
      </button>
      {productos[currentIndex]}
      <button className="next" onClick={handleNext}>
        →
      </button>
    </div>
  ) : (
    <h2>No hay nada para mostrar... por ahora</h2>
  );
}

export default Slider;