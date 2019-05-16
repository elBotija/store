import React from 'react';
import './DetalleProducto.css' 

const DetalleProducto = (props) => {
    if(!props.producto) return null
    const { imagen, nombre, precio, descripcion } = props.producto
    return ( 
      <div className="info-producto">
        <div className="imagen">
            <img src={`${process.env.PUBLIC_URL}/img/${imagen}.png`} alt={nombre} />
        </div>
        <div className="info">
            <h2>{nombre}</h2>
            <p className="precio">$ {precio}</p>
            <p>{descripcion}</p>
        </div>
      </div>
    )
 }
  
 export default DetalleProducto;