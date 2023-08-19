import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import Contexto from "../contexto/Contexto";
import Contador from "./Contador";
import BarraBusqueda from "./BarraBusqueda";;

const Nav=()=> {
    const navegacion=useNavigate();
    const {deslogearme, logeado}=useContext(Contexto);

    const deslogear=()=> {
        deslogearme();
        navegacion("/Registro", {replace: true})
    }

    return (
        <>
        <nav>
        <BarraBusqueda />
        {!logeado.estado && <NavLink to="/Registro">Registro</NavLink>}
        <NavLink to="/">Principal</NavLink>
        {logeado.estado && <NavLink to="/Ruta2">Total</NavLink>}
        {logeado.estado && <Contador />}
        {logeado.estado && <button onClick={deslogear}>Salir</button>}
        </nav>
        <Outlet/>
        </>
    )
}
export default Nav;