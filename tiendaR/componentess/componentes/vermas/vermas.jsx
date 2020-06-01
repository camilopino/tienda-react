import React from 'react';
import BarraSuperior from '../barra_superior/barra_superior.jsx'
import {  Link } from 'react-router-dom';
import './ver.css';

  class VerMas extends React.Component{
    constructor(){
      super()
      this.state={
      nombre:"",
      imagen:"",
      precio:"",
      cantidad:"",
    }
    }


    getDatos(){
    var datos=JSON.parse(localStorage.getItem("datos"));
    this.state.nombre=datos.producto;
    this.state.imagen=datos.imagen;
    this.state.cantidad=datos.cantidad;
    this.state.precio=datos.precio;
    console.log(datos)
  }
    render(){
      this.getDatos()
      return(
      <div className="row cartaver">
        <BarraSuperior></BarraSuperior>
        <div className="card">
        <div className="row">
          <h3>{this.state.nombre}</h3>
        </div>
        <div className="row">
          <div className="col s12 m6 contImg">
            <img src={this.state.imagen} className="imagenver" />
          </div>
          <div className="col s12 m6 card">
            <div className="row">
              <h5>Precio: {this.state.precio}</h5>
            </div>
            <div className="row">
              <h5>Cantidad: {this.state.cantidad}</h5>
            </div>
          </div>
        </div>
        <div className="row">
        <Link to="/principal"><button className="btn waves-effect waves-light botonver blue darken-4">atras</button></Link>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      )
    }

  }

export default VerMas
