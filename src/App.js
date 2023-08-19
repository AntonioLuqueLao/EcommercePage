import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Ruta1 from './rutas/Ruta1';
import Provider from './contexto/Provider';

function App() {
  return (
    <div className="App">
      <Provider>
      <BrowserRouter>
      <Ruta1/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
