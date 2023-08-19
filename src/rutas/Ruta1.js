import { Routes, Route } from "react-router-dom";
import Registro from "../paginas/Registro";
import Principal from "../paginas/Principal";
import Nav from "../componentes/Nav";
import Ruta2 from "./Ruta2";
import RutaPrivada from "./RutaPrivada";
import RutaPublica from "./RutaPublica";
import MasInfo from "../paginas/MasInfo";
import Resultados from "../paginas/Resultados";

const Ruta1=()=> {
    return (
        <>
        <Routes>
            <Route element={<Nav/>}>
            <Route path="/" element={
            <Principal/>
        } />
            <Route path="/Resultados" element={
            <Resultados/>
        } />
            <Route path="/Registro" element={
            <RutaPublica>
            <Registro/>
            </RutaPublica>
            } />
            <Route path="/MasInfo/:indice" element={<MasInfo/>} />
            <Route path="/Ruta2/*" element={
            <RutaPrivada>
            <Ruta2/>
            </RutaPrivada>
            } />
            </Route>
        </Routes>
        </>
    )
}

export default Ruta1;