import React, { useState } from 'react';
import axios from 'axios';
import "./stadistic.css";

export default function Estadisticas() {
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [result, setResult] = useState({ totalIdentificationNumbers: 0, totalPrice: 0 }); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://proyectobackbarberia-production.up.railway.app/user/services/stats?identification_number=${identificationNumber}`);
      console.log("Respuesta del servidor:", response.data);

      // Desestructurar la respuesta para obtener las propiedades específicas
      const { totalIdentificationNumbers, totalPrice } = response.data;
      const discountedPrice = totalPrice - (totalPrice * 0.5);

      setResult({ totalIdentificationNumbers, totalPrice, discountedPrice });
    } catch (error) {
      setResult({ totalIdentificationNumbers: 0, totalPrice: 0 });
      console.error("Error al realizar la consulta:", error);
    }
  };

  return (
    <div className="contenedor-estadisticas">
      <div className="contenedor-izq-esta">
        <h3 className='title'>Estas son tus cortes barbero</h3>
        <input
          className='input-busqueda'
          type="text"
          value={identificationNumber}
          onChange={(e) => setIdentificationNumber(e.target.value)}
          placeholder="Identification Number"
        />
        <button className='boton-busqueda' onClick={handleSearch}>Search</button>
        <div className='prueba'>
          <p className='resultado-cortes'>{result.totalIdentificationNumbers}</p>
        </div>
      </div>
      <div className="contenedor-derc-esta">
        <h3 className='title-two'>Acá encontrarás un resumen de lo que te estás ganando</h3>
        <h1 className='result-statistics'>Te corresponde</h1>
        <p className='resultado-cortes-statisdic'>${result.discountedPrice}</p>
        <h1 className='result-statistics'>Total</h1>
        <p className='resultado-cortes-statisdic'>${result.totalPrice}</p>
        
      </div>
    </div>
  );
}