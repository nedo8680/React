import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  
  // Crear Listado de Productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: "Camiseta ReactJS", precio: 50},
    { id: 2, nombre: "Camiseta Angular", precio: 30},
    { id: 3, nombre: "Camiseta VueJS", precio: 40},
    { id: 4, nombre: "Camiseta NodeJS", precio: 60},
  ]);
  
  // State para carrito de compras
  const [ carrito, agregarProducto] = useState( [] );


  const fecha = new Date().getFullYear();
  return (
  <Fragment>
      <Header 
        titulo="Tienda Virtual"
      />
      <h2>Lista de Productos</h2>
      {productos.map((producto)=> (
        <Producto 
          key={producto.id}
          producto = {producto}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
          productos = {productos}
        />
      ))}
      <Carrito 
         carrito={carrito}
         agregarProducto = {agregarProducto}
      />
      <Footer
        fecha={fecha} 
      />
  </Fragment>    
  );
}

export default App;
