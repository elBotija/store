import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'  
import Productos from './Productos/Productos'
import Nosotros from './Nosotros/Nosotros'
import Error from './Error/Error'
import infoProductos from '../data/data.json'
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion'
import Contacto from './Contacto/Contacto'
import DetalleProducto from './DetalleProducto/DetalleProducto'

class Router extends Component {

    state = {
        productos : [],
        query: ""
    }

    componentWillMount(){
        this.setState({
            productos: infoProductos
        })
    }  

    busquedaProducto = query => {
        if(query.length > 3 ){
            this.setState({
                query
            })
        }else{
            this.setState({
                query: ""
            })
        }
    }

    render() { 
        let productos = [...this.state.productos]
        let {query} = this.state
        let regex = new RegExp(query.toLowerCase(), 'i')
        
        // productos = query ? productos.filter(p => (p.nombre.toLowerCase().search(regex) > -1 )) : productos
        productos = query ? productos.filter(p => (p.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1 )) : productos
        
        return (  
            <BrowserRouter>
                <Header/>
                <Navegacion/> 
                <Switch>
                    <Route exact path={["/","/productos"]} render={ () => (
                        <Productos 
                            productos={productos} 
                            busquedaProducto={this.busquedaProducto}
                        />
                    )}/>
                    <Route exact path="/producto/:productoId" render={ (props) => {
                        let idProducto = props.match.params.productoId
                        return(
                            <DetalleProducto 
                                producto={this.state.productos[idProducto]}
                            />
                        )
                    }}/>
                    <Route exact path="/nosotros" component={Nosotros}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        );
    }
}
 
export default Router;