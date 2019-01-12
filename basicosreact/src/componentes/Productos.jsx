import React, {Component} from 'react';
import Producto from './Producto';

const Productos = (props) => {
    return (
        <div>
            <h1>Tienda Virtual</h1>
            <p>Listado de Productos</p>
            {Object.keys(props.listaProductos).map(key => (
                <Producto
                    key = {key}
                    producto = {props.listaProductos[key]}
                />
            ))}
        </div>
    )
}

export default Productos;