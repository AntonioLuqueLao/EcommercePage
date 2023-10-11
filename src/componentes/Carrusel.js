import Recuadro from "./Recuadro";
import { useState } from "react";

const Carrusel = ({ sugerencias }) => {
  const [contadorCarrusel, setContadorCarrusel] = useState(0);

  const mover = (direccion) => {
    if (direccion === "derecha") {
      if (contadorCarrusel === sugerencias.length - 1) {
        setContadorCarrusel(0);
      } else {
        setContadorCarrusel(contadorCarrusel + 1);
      }
    } else if (direccion === "izquierda") {
      if (contadorCarrusel === 0) {
        setContadorCarrusel(sugerencias.length - 1);
      } else {
        setContadorCarrusel(contadorCarrusel - 1);
      }
    }
  };

  const prevIndex = contadorCarrusel === 0 ? sugerencias.length - 1 : contadorCarrusel - 1;
  const nextIndex = contadorCarrusel === sugerencias.length - 1 ? 0 : contadorCarrusel + 1;

  return (
    <div className="carrusel-container">
      <button className="izquierda" onClick={() => mover("izquierda")}>
      <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div className="recomendados-container">
      <div className="recuadro1-container">
      <Recuadro key={prevIndex} indice={prevIndex} datos={sugerencias[prevIndex]} />
      </div>
      <Recuadro key={contadorCarrusel} indice={contadorCarrusel} datos={sugerencias[contadorCarrusel]} />
      <Recuadro key={nextIndex} indice={nextIndex} datos={sugerencias[nextIndex]} />
      </div>
      <button className="derecha" onClick={() => mover("derecha")}>
      <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Carrusel;
