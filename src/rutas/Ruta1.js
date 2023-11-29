import { Routes, Route } from "react-router-dom";
import Registro from "../paginas/Registro";
import Principal from "../paginas/Principal";
import Nav from "../componentes/Nav";
import Ruta2 from "./Ruta2";
import RutaPrivada from "./RutaPrivada";
import RutaPublica from "./RutaPublica";
import MasInfo from "../paginas/MasInfo";
import Resultados from "../paginas/Resultados";
import Historial from "../paginas/Historial";
import Productos from "../paginas/Productos";
import Footer from "../componentes/Footer";

const Ruta1=()=> {
    return (
        <>
        <div className="wrapper">
        <Routes>
            <Route element={<Nav/>}>
            <Route path="/Principal" element={
            <Principal/>
        } />
            <Route path="/Resultados" element={
            <Resultados/>
        } />
            <Route path="/Productos/:seccion" element={<Productos />}/>
            <Route path="/" element={
            <RutaPublica>
            <Registro/>
            </RutaPublica>
            } />
            <Route path="/MasInfo/:indice" element={<MasInfo/>} />
            <Route path="/Historial" element={
            <RutaPrivada>
            <Historial/>
            </RutaPrivada>
            }>
            </Route>
            <Route path="/Ruta2/*" element={
            <RutaPrivada>
            <Ruta2/>
            </RutaPrivada>
            } />
            </Route>
        </Routes>
        <Footer />
        </div>
        </>
    )
}

export default Ruta1;