import React, { Component } from 'react';
import Producto from './Producto'
import './Productos.css'

class Productos extends Component {
    render() { 
        return ( 
            <div className="productos">
                <h2>Nuestros Productos</h2>
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