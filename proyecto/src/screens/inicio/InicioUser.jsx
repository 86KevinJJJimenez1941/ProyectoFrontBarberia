import axios from 'axios';
import React, { useState } from 'react';
import "./inicioUser.css";
import logo from '../../imgs/principal.jpg';
import { Link } from 'react-router-dom';

export default function Inicio() {
  const [message, setMessage] = useState(null);
  const [serviceData, setServiceData] = useState({
    identification_number: "",
    type_service: "",
    price: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://proyectobackbarberia-production.up.railway.app/user/services/guardado", serviceData);
      setMessage("Registro de servicio exitoso");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  return (
    <div className="contenedor">
      <div className="contenedor-izq">
        <img className='imagen-fondo' src={logo} alt="" srcSet="" />
        <h3>Bienvenido Barbero</h3>
        <h4>Fecha actual: {new Date().toDateString()}</h4>
      </div>
      <div className="contenedor-derc">
        <h2 className='presentacion'>Registro de cortes</h2>
        <form className='form' onSubmit={handleSubmit}>
          <label className='label'>
            <input
              type="text"
              placeholder='Numero de identificación'
              name="identification_number"
              value={serviceData.identification_number}
              onChange={handleChange}
            />
          </label>
          <label className='label'>
            <input
              type="text"
              placeholder='Tipo de servicio'
              name="type_service"
              value={serviceData.type_service}
              onChange={handleChange}
            />
          </label>
          <label  className='label'>
            <input
              type="text"
              placeholder='Precio'
              name="price"
              value={serviceData.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button className='botones' type="submit">Registrar</button>
          <Link to="/estadisticas">
          <button className='botones' type="submit">Estadisticas</button>
          </Link> 

        </form>
        {message && (
          <div className="success-message">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}