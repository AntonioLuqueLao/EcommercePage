import { NavLink } from "react-router-dom"

const Nav2=()=> {
    
    return (
        <nav className="nav2">
            {/* <NavLink to="/">Destacados</NavLink> */}
            <NavLink to="/Productos/Calzado">Calzado</NavLink>
            <NavLink to="/Productos/Consolas">Consolas</NavLink>
            <NavLink to="/Productos/Videjuegos">Videjuegos</NavLink>
            <NavLink to="/Productos/Libros">Libros</NavLink>
            <NavLink to="/Productos/Comics">Comics</NavLink>
        </nav>
    )
}

export default Nav2;