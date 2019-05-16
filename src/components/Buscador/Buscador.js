import React, { Component } from 'react';
import './Buscador.css'


class Buscador extends Component {
    leerDatos = e => {
        const query = e.target.value

        this.props.busqueda(query)
    }

    render() { 
        return ( 
            <form className="buscador">
                <input type="text" placeholder="Busqueda" onChange={this.leerDatos}/>
            </form>
        )
    }
}
 
export default Buscador;