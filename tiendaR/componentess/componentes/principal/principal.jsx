import React from 'react';
import BarraSuperior from '../barra_superior/barra_superior.jsx';
import * as request from 'superagent';
import {  Link } from 'react-router-dom';
import VerMas from '../vermas/vermas.jsx';
import Carrito from '../carrito/carrito.jsx';
import './estilo.css';

class Principal extends React.Component{
    constructor(){
      super()
      this.state = {
        prods: [],productos:[],
      }

    }
    //INICIACION DEL GETDATOS
    componentDidMount(){
      this.getDatosPrincipal()
    }
    //OBTENER DATOS DESDE EL SERVIDOR
    getDatosPrincipal(){
      fetch('http://localhost:3000/principal')
      .then(res=> res.json())
      .then(data=> {
        this.setState({prods: data})
      })
    }

//RENDERIZACION DE LA PAGINA
    render(){
      return(
    <div className="row">
      <BarraSuperior></BarraSuperior>
      <div className="card blue darken-4 principal">
      <div className="card titulocatalogo">
        <h2>Catalogo de Productos</h2>
      </div>
      <div className="row">
      {
        this.state.prods.map(catalogo=>{
          return(
          <div className="col s12 m3  card" key={catalogo._id} >
            <div className="row contenedorImg">
              <img src={catalogo.src} />
            </div>
            <div className="row titulo">
              <h5 id="producto">{catalogo.producto}</h5>
            </div>
            <div className="row">
              <p className="col s4">Cantidad:</p>
              <p className="col s8">{catalogo.cantidad}</p>
            </div>
            <div className="row">
              <p className="col s4">Precio:</p>
              <p  className="col s8">{catalogo.precio}</p>
            </div>
            <div className="row">
              <div className="col s12 m4">
              <Link to="/vermas"> <button className="btn waves-effect waves-light blue darken-4" onClick={()=>this.vermas(catalogo._id,catalogo.src,
                catalogo.producto,catalogo.cantidad,catalogo.precio)}>Ver mas</button></Link>
              </div>
              <div className="col s12 m4">
              <button className="btn waves-effect waves-light amber" onClick={()=>this.carrito(catalogo._id,catalogo.src,
                catalogo.producto,catalogo.cantidad,catalogo.precio,this.state.input)}>añadir</button>
              </div>
              <div className="col s12 m3 offset-m1">
                <input type="number" defaultValue="0" onChange={e=>this.setState({input:e.target.value})}  name="contador" style={{height:36, width:36}}/>
              </div>
            </div>
          </div>
        )

        })
      }
      </div>
    </div>
    </div>
      );
    }

    //FUNCION VER MAS
    vermas(id,imagen,producto,cantidad,precio ){
      localStorage.setItem("datos",JSON.stringify({"id":id,"imagen":imagen,"producto":producto,"precio":precio,"cantidad":cantidad}));
    }
    //FUNCION CARRITO
    carrito(id,imagen,producto,cantidad,precio,input){
      var subtotal= precio*input
      var objeto={"id":id,"imagen":imagen,"nombre":producto,"precio":precio,"input":input, "subtotal":subtotal}
      this.state.productos.push(objeto)
      var arreglo= JSON.stringify(this.state.productos);
      localStorage.setItem("prods",arreglo);
      console.log(id)
    }



  }

export default Principal
