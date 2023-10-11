import React, { useReducer, useState, useEffect, useRef } from "react";
import Contexto from "./Contexto";
import Reducer from "./Reducer";
import ACTIONS from "./Actions";

const productos = [
    {
        nombre: "Adidas Superstar",
        fotos: [
            "/imagenes/adidas superstar.jpg",
            "/imagenes/51Fugh0ycpL._AC_UY500_.jpg",
            "/imagenes/719pbj+-iFL._AC_SX575._SX._UX._SY._UY_.jpg"
        ],
        texto: "Se crearon en 1969 y, debido a su peculiar punta, la denominaron “pezuña de camello” (camel toe). Fue usada por grandes jugadores de la NBA, destacando por encima de todos Kareem Abdul-Jabbar.",
        precio: "99,00" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "Reebok Classic Leather",
        fotos: [
            "/imagenes/61gfybmjlyL._AC_UY500_.jpg",
            "/imagenes/61s7vs6kZfL._AC_SY500._SX._UX._SY._UY_.jpg",
            "/imagenes/61Av8JmfJLL._AC_SX500._SX._UX._SY._UY_.jpg"
        ],
        texto: "Cuesta no pensar en este modelo cuando te nombran a Reebok. Desde su comercialización en 1983 Se ha asociado siempre al running, aunque su estilo elegante la convierten en una de las mejores opciones para un look casual.",
        precio: "166,90" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "aqtgj",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "pvlñcix",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "Nike Air Force 1",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "Nike Air Force 3",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "aodldhe",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "peñals",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "qñspo",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "añc`dp",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "zxcb",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "mnbv",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "123ry",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "098okj",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "ñdlfj5",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "asdf",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "alsjd",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "zpxien",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "1902jisd",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },
    {
        nombre: "ñanjaa09",
        fotos: [
            "/imagenes/81uiWMk9dnL._AC_UX500_.jpg",
            "/imagenes/51w8+pQCVvL._AC_SX500._SX._UX._SY._UY_.jpg",
            "/imagenes/61ifQgbPetL._AC_SY500._SX._UX._SY._UY_.jpg"
        ],
        texto: "La controversia hecha zapatilla. Nike diseñó en 1984 estas bambas para el mejor jugador de baloncesto de la historia y ya, desde la primera vez que se las puso, la NBA las rechazó por ir en contra del reglamento. Estatus de poder y de orgullo racial, son las zapatillas Nike más vendidas de la historia.",
        precio: "575,35" ,
        seleccionado: false,
        departamento: "Calzado"
    },

];

const Provider = ({ children }) => {
    const [resultadosEncontrados, setResultadosEncontrados] = useState(false);
    const [state, setState] = useState("");
    const [total, setTotal] = useState([]);
    const [barra, setBarra] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [historial, setHistorial] = useState([]);
    const [highlight, setHighlight]=useState(false);
      // Agregar variables de estado para las sugerencias
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
    
    const [cantidadRenderizados, setCantidadRenderizados] = useState(10);
    const refObservador = useRef(null);

    useEffect(() => {
        if (refObservador.current) {
            const observador = new IntersectionObserver(handleObservador, {
                threshold: 1,
            });
            observador.observe(refObservador.current);
            return () => observador.disconnect();
        }
    }, [refObservador]);

    const handleObservador = (entradas) => {
        const entrada = entradas[0];
        if (entrada.isIntersecting) {
            setCantidadRenderizados(prevCantidad => prevCantidad + 10);
        }
    };

    const init = () => {
        const valor = localStorage.getItem("estado");

        return {
            estado: !!valor
        };
    };

    const logearme = () => {
        const action = {
            type: ACTIONS.log
        };
        dispatch(action);
        localStorage.setItem("estado", true);
    };
    
    const deslogearme = () => {
        const action = {
            type: ACTIONS.unlog
        };
        dispatch(action);
        localStorage.removeItem("estado");
    };
    
    const [logeado, dispatch] = useReducer(Reducer, {}, init);

    return (
        <Contexto.Provider value={{
            state,
            setState,
            logearme,
            deslogearme,
            logeado,
            productos,
            total,
            setTotal,
            barra,
            setBarra,
            inputValue,
            setInputValue,
            resultadosEncontrados,
            setResultadosEncontrados,
            historial,
            setHistorial,
            cantidadRenderizados,
            refObservador,
            sugerencias, 
            setSugerencias,
            mostrarSugerencias, 
            setMostrarSugerencias,
            highlight, 
            setHighlight
        }}>
            {children}
        </Contexto.Provider>
    );
};

export default Provider;
