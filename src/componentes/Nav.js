import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom"
import Contexto from "../contexto/Contexto";
import Contador from "./Contador";
import BarraBusqueda from "./BarraBusqueda";
import Nav2 from "./Nav2";
import NavCover from "./NavCover";
import MenuDesplegable from "./MenuDesplegable";
import VentanaPrecompra from "./VentanaPrecompra";
import VentanaCover from "./VentanaCover";

const Nav=()=> {
    const {logeado}=useContext(Contexto);

    return (
        <>
        <nav className="nav1">
        <NavLink to="/"><div className="logo-container"><img className="logo" src="/logo/—Pngtree—cash on delivery payment ecommerce_6388629.png" alt="/logo/—Pngtree—cash on delivery payment ecommerce_6388629.png"/></div></NavLink>
        <BarraBusqueda />
        {logeado.estado && <Contador />}
        {!logeado.estado && <NavLink id="logo-registro" to="/Registro"><i class="fa-solid fa-user" id="user-icon"></i></NavLink>}
        {logeado.estado && <MenuDesplegable />}
        </nav>
        <Nav2/>
        <NavCover/>
        <VentanaCover/>
        <VentanaPrecompra/>
        <Outlet/>
        </>
    )
}
export default Nav;