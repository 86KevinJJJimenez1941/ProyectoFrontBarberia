import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistroUsuario from "./screens/register/RegistroUsuario";
import Login from "./screens/login/LoginUser"
import Inicio from "./screens/inicio/InicioUser";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistroUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;