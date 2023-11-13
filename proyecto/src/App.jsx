import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistroUsuario from "./screens/register/RegistroUsuario";
import Login from "./screens/login/LoginUser"
import Inicio from "./screens/inicio/InicioUser";
import Estadisticas from "./screens/estadisticas/Statistic";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistroUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;