import React, {Component} from 'react';

const Producto = (props) => {
    const {nombre, precio} = props.producto;
    return (
        <div>
            <h1>Producto</h1>
            <p><b>Nombre:</b> {nombre}</p>
            <p><b>Precio:</b> {precio}</p>
        </div>
    )
}

export default Producto;