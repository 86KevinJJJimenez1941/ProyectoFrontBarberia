import React, { useState } from 'react';
import axios from 'axios';
import "./stadistic.css";

export default function Estadisticas() {
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [result, setResult] = useState(0); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://proyectobackbarberia-production.up.railway.app/user/services/count?identification_number=${identificationNumber}`);
      setResult(response.data.count || 0);
    } catch (error) {
      setResult(0);
      console.error("Error al realizar la consulta:", error);
    }
  };

  return (
    <div className="contenedor-estadisticas">
      <div className="contenedor-izq-esta">
        <h3 className='title'>Estas son tus estadisticas barbero</h3>
        <input
          className='input-busqueda'
          type="text"
          value={identificationNumber}
          onChange={(e) => setIdentificationNumber(e.target.value)}
          placeholder="Identification Number"
        />
        <button className='boton-busqueda' onClick={handleSearch}>Search</button>
        <div className='prueba'>
          <p className='resultado-cortes'>{result}</p>
        </div>
      </div>
      <div className="contenedor-derc-esta"></div>
    </div>
  );
}