import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import ListadoProductos from './Productos'

class Aplicacion extends Component{

    state = {
        productos : []
    };

    componentDidMount() {

        const productos = [
            {nombre : 'Productos N°1 Stock Agotado', precio : 657},
            {nombre : 'Productos N°2', precio : 950},
            {nombre : 'Productos N°3', precio : 1250},
            {nombre : 'Productos N°4', precio : 450}
        ];

        this.setState({
            productos : productos
        })
    }

    render() {
        return (
            <div>
                <Header titulo="Titulo de Cabecera" />
                <ListadoProductos listaProductos={this.state.productos} />
                <Footer />
            </div>
        )
    }
}

export default Aplicacion;