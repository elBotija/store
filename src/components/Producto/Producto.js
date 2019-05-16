import React from 'react';
import { Link } from 'react-router-dom'

const Producto = (props) => {
    const { imagen, nombre, precio, id } = props.info
    return ( 
        <li>
            <img src={`${process.env.PUBLIC_URL}/img/${imagen}.png`} alt={nombre} />
            <p>{nombre} <span>$ {precio}</span></p> 
            <Link to={`${process.env.PUBLIC_URL}/producto/${id}`}>Mas info</Link>
        </li>
    )
}
 
export default Producto;