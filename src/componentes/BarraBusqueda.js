import React, { useContext, useEffect } from "react";
import Contexto from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";

const BarraBusqueda = () => {
  const { productos, setBarra, inputValue, setInputValue, setResultadosEncontrados, sugerencias, setSugerencias, mostrarSugerencias, setMostrarSugerencias,highlight, setHighlight } = useContext(Contexto);

  const navegacion = useNavigate();

  useEffect(() => {
    document.addEventListener("click", manejarClickFueraSugerencias);

    return () => {
      document.removeEventListener("click", manejarClickFueraSugerencias);
    };
  },);
  
  useEffect(() => {
    document.addEventListener("click", manejarClickFueraForm);

    return () => {
      document.removeEventListener("click", manejarClickFueraForm);
    };
  },);

  const enviarInfo = (e) => {
    e.preventDefault();
    navegacion("/Resultados", { replace: false });
    setHighlight(false);
  };

  const manejarInput = (e) => {
    const valorInput = e.target.value;
    setInputValue(valorInput);
    setHighlight(true);

    let productosArray = [];
    let valorInputMinuscula = valorInput.toLowerCase().replace(/\s+/g, "");

    for (let i = 0; i < productos.length; i++) {
      let nombreProductoMinus = productos[i].nombre.toLowerCase().replace(/\s+/g, "");
      if (nombreProductoMinus.includes(valorInputMinuscula)) {
        productosArray.push(productos[i]);
      }
    }

    /* Actualizar las sugerencias y el estado de mostrarSugerencias */
    setSugerencias(productosArray);
    setMostrarSugerencias(productosArray.length > 0);

    setBarra(productosArray);
    setResultadosEncontrados(productosArray.length > 0);
  };

  const manejarSugerenciaClick = (sugerencia) => {
    setInputValue(sugerencia.nombre);
    setBarra([sugerencia]);
    setMostrarSugerencias(false);
    setResultadosEncontrados(true);
    navegacion("/Resultados", { replace: false });
  };

  const manejarClickFueraSugerencias = (e) => {
    if (!e.target.closest(".searchBar-form")) {
      setMostrarSugerencias(false);
      setHighlight(false)
    }
  };
  const manejarClickFueraForm = (e) => {
    if (!e.target.closest(".searchBar-form")) {
      setHighlight(false);
    }
  };

  return (
    <>
      <form className="searchBar-form" onClick={()=>setHighlight(true)}
 onSubmit={(e) => enviarInfo(e)}>
        <div className={`${highlight ? "highlighted-searchBar-box" : "searchBar-box"}`}>
        <input className="searchBar-bar" type="text" onChange={(e) => manejarInput(e)} value={inputValue} />
        <button className="searchBar-button" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>

      {/* Mostrar las sugerencias */}
      {mostrarSugerencias && inputValue.trim() !== "" && (
        <ul className="lista-sugerencias">
          {sugerencias.map((sugerencia, index) => (
            <li
              key={index}
              onClick={() => manejarSugerenciaClick(sugerencia)}
            >
              {sugerencia.nombre}
            </li>
          ))}
        </ul>
      )}
      </form>
    </>
  );
};

export default BarraBusqueda;
