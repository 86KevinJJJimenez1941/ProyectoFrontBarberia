import { useState } from 'react';
import axios from 'axios';
import "./RegistroUsuario.css"
import logo from '../../imgs/logo.webp'
import { Link } from 'react-router-dom';

export default function RegistroUsuario() {
  const [message, setMessage] = useState(null);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    identification_number: "",
    password: "",
    phone_number: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user", userData);
      setMessage("Usuario creado correctamente en la base de datos");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
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
          <p>Para unirte a nuestra comunidad por favor registrate con tus datos</p>
          <img src={logo} alt="" srcset="" />
          
          <Link to="/login"><input
            className='imagenlogo'
            type="button"
            value="Login"
            />
          </Link> 
        </div>
      </div>
      <div className="form-information">
        <div className="form-information-childs">
          <h2>Crear una cuenta</h2>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder='Nombre Completo'
                name="username"
                value={userData.username}
                onChange={handleChange} />
            </label>
            <label>
              <input
                type="text"
                placeholder='Numero de identificación'
                name="identification_number"
                value={userData.identification_number}
                onChange={handleChange} />
            </label>
            <label>
              <input
                type="email"
                placeholder='Correo Electronico'
                name="email"
                value={userData.email}
                onChange={handleChange} />
            </label>
            <label>
              <input
                type="password"
                placeholder='Contraseña'
                name="password"
                value={userData.password}
                onChange={handleChange} />
            </label>
            <label>
              <input
                type="text"
                placeholder='Telefono'
                name="phone_number"
                value={userData.phone_number}
                onChange={handleChange} />
            </label>
            <button type="button" onClick={handleSubmit}>Registrarse</button>
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
