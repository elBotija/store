import React, { Component } from 'react';
import Producto from '../Producto/Producto'
import './Productos.css'
import Buscador from '../Buscador/Buscador'

class Productos extends Component {
    render() { 
        return ( 
            <div className="productos">
                <h2>Nuestros Productos</h2>
                
                <Buscador busqueda={this.props.busquedaProducto}/>

                <ul className="lista-productos">
                    {this.props.productos.map(
                        (p,i) => (
                            <Producto 
                                info={p}
                                key={i}
                            />
                        )
                    )}
                </ul>
            </div>
         );
    }
}
 
export default Productos;