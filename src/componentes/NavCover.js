import { useContext, useEffect, useState } from "react";
import Contexto from "../contexto/Contexto";

const NavCover = () => {
  const [altura, setAltura] = useState(document.body.scrollHeight);
  const { highlight } = useContext(Contexto);

  const actualizarAltura = () => {
    setAltura(document.body.scrollHeight);
  };

  useEffect(() => {
    // Agregar eventos de escucha para el cambio de tamaño de la ventana y el desplazamiento del documento
    window.addEventListener("resize", actualizarAltura);
    window.addEventListener("scroll", actualizarAltura);

    return () => {
      // Limpieza de los eventos de escucha cuando el componente se desmonta
      window.removeEventListener("resize", actualizarAltura);
      window.removeEventListener("scroll", actualizarAltura);
    };
  }, []);

  const estilos = {
    zIndex: 3,
    width: "100%",
    position: "absolute",
    height: (altura===0 ? "100vh" : (altura-160) + "px"),
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: highlight ? "block" : "none"
  };

  return <div className="nav-cover" style={estilos}></div>;
};

export default NavCover;
