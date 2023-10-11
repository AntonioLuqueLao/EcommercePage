import React, { useContext, useState, useEffect } from "react";
import Contexto from "../contexto/Contexto";
import { NavLink } from "react-router-dom";

const Contador = () => {
  const { total } = useContext(Contexto);
  const [contadorSalto, setContadorSalto] = useState(false);

  useEffect(() => {
    // Cuando total.length cambia, activa la animación
    setContadorSalto(true);

    // Después de 300ms, desactiva la animación
    setTimeout(() => {
        setContadorSalto(false);
    }, 300);
  }, [total.length]);

  return (
    <NavLink className="carro-link" to={"/Ruta2"}>
      <div className={`carro ${contadorSalto ? 'contador-salto' : ''}`}>
        <div className="carro-contador">{total.length}</div>
        </div>
        <i className="fa-solid fa-cart-shopping" style={{fontSize: "25px", zIndex: "2"}}></i>
    </NavLink>
  );
};

export default Contador;
