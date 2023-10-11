import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Contexto from '../contexto/Contexto';

const MenuDesplegable = () => {
  const navegacion=useNavigate();
  const {deslogearme, logeado}=useContext(Contexto);

  const deslogear=()=> {
    deslogearme();
    navegacion("/Registro", {replace: true})
    console.log(logeado);
}

  return (
    <div className="dropdown">
      <button className="dropdown-button">
        <span>Hola usuario</span>
        <i className="fa-solid fa-arrow-down"></i>
      </button>

        <ul className="dropdown-menu">
            <li><NavLink to="/Historial">Historial</NavLink></li>
            <li><button onClick={deslogear}>Salir</button></li>
        </ul>
    </div>
  );
};

export default MenuDesplegable;
