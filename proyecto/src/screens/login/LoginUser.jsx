import { useState } from 'react';
import axios from 'axios';
import logo from '../../imgs/logo.webp'
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://proyectobackbarberia-production.up.railway.app/user/login", userData);
      if (response.data.message) {
        navigate('/inicio');
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container-form">
      <div className="information">
        <div className="info-childs">
          <h2>Bienvenidos</h2>
          <p>Para unirte a nuestra comunidad por favor inicia sesión con tus datos</p>
          <img src={logo} alt="" srcset="" />
          <Link to="/register">
            <input className='imagenlogo' type="button" value="Registrarse" />
          </Link>
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Iniciar sesión</h2>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              <input
                type="email"
                placeholder='Correo Electrónico'
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder='Contraseña'
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={handleSubmit}>Iniciar Sesión</button>
          </form>
          {message && (
            <div className="success-message">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
