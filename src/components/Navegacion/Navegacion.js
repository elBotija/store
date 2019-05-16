import React from 'react';
import{ NavLink } from 'react-router-dom'

import './Navegacion.css'

const Navegacion = () => {
    return (   
        <nav className="navegacion">
            <NavLink to={`${process.env.PUBLIC_URL}/nosotros`} activeClassName="activo">Nosotros</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/productos`} activeClassName="activo">Productos</NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/contacto`} activeClassName="activo">Contacto</NavLink>
        </nav>
    )
}
 
export default Navegacion;