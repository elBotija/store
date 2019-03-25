import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'  
import Productos from './Productos'
import Nosotros from './Nosotros'
import Error from './Error'
import infoProductos from '../data/data.json'
import Header from './Header';
import Navegacion from './Navegacion'
import DetalleProducto from './DetalleProducto'

class Router extends Component {

    state = {
        productos : []
    }

    componentWillMount(){
        this.setState({
            productos: infoProductos
        })
    }  

    render() { 
        return (  
            <BrowserRouter>
                <Header/>
                <Navegacion/> 
                <Switch>
                    <Route exact path="/" render={ () => (
                        <Productos productos={this.state.productos} />
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
                    <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        );
    }
}
 
export default Router;