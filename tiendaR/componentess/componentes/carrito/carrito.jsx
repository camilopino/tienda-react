import React from 'react';
import BarraSuperior from '../barra_superior/barra_superior.jsx'
import * as request from 'superagent';
import {  Link } from 'react-router-dom';
import './carrito.css';

class Carrito extends React.Component{
  constructor(){
    super()
    this.state={
      nombre:"",
      datos:[],
      total:"",
      subtotal:"",
      cantidad:"",
      nombre2:"",
      s1:""
    }
  }
  //OBTENER DATOS DESDE EL LOCALSTORAGE Y SUMA DE SUBTOTALES
  obtenerDatos(){
    this.state.datos= JSON.parse(localStorage.getItem("prods"));
    this.state.total=0;
    this.state.subtotal=0;
    this.state.s1= this.state.datos.map(item =>{
      return this.state.total+=item.subtotal
    })
  }
//FUNCION DEL BOTON PAGAR
  pagar(){
    this.state.datos.map(item=>{
      this.getObjeto(item.nombre)
      .end((err,res)=>{
          let respuesta=(res.body)
          respuesta.map((prod)=>{
            var resultado=prod.cantidad-item.input
            console.log(prod.producto)
            this.cambiardatos(prod.producto,resultado)
            .end((err,res)=>{
              console.log(res.body)
            })
          })
        }
      )
    })
  }
  //OBTENCION DE UN OBJETO ESPECIFICO
  getObjeto(nombre){
    return request.get('http://localhost:3000/principal'+`/${nombre}`)
  }
  //CAMBIO DE CANTIDADES
  cambiardatos(objeto, cantidad){
    return request.put('http://localhost:3000/principal'+`/${objeto}`)
    .send({cantidad:cantidad})
  }


  render(){
    this.obtenerDatos()
    return(
      <div className="row">
          <BarraSuperior></BarraSuperior>

        <div className="card">
        <div className="row">
        <h2>
          Carrito
        </h2>
        </div>
        <div className="row">


          {
            this.state.datos.map(producto=>{
              return(
            <div className="row">
            <div className="col s12 " key={producto.id}>
              <div className="row">
                <div className="col s12 m6 imagencarrito">
                  <img src={producto.imagen} />
                </div>

                <div className="col s12 m6">
                  <div className="row">
                    <h5>{producto.nombre}</h5>
                  </div>
                  <div className="row">
                    <h5>unidades: {producto.input}</h5>
                  </div>
                  <div className="row">
                    <h5>Subtotal: {producto.subtotal}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
            )
            })
          }

          <div className="col s12 m6">
            <div className="row">
              <h2>Total:{this.state.total}</h2>
            </div>
            <div className="row">
              <Link to="/principal" className="btn waves-effect waves-ligth" style={{margin:4}} onClick={()=>this.pagar()} >Pagar</Link>
              <Link to="/principal" className="btn waves-effect waves-ligth">cancelar</Link>
            </div>
          </div>
          </div>
        </div>
      </div>


    )
  }
}
export default Carrito
