import React from 'react';
import {  Link } from 'react-router-dom';
import './styles.css';

class Login extends React.Component{
    render(){
        return(
          <div className="contenedor-login">
          <div className="row">
            <div className="tarjeta col s12 m4 offset-m4">
                <div className="card-content">
                  <h3>Iniciar Secion</h3>
                    <form>
                    <label>Nombre</label>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="text" name="nombre" placeholder="ingresa tu usuario" required />
                      </div>
                    </div>
                    <label>Contraseña</label>
                    <div className="row">
                      <div className="input-field col s12">
                        <input type="password" name="Contrasena" placeholder="ingresa tu contraseña" required />
                      </div>
                    </div>
                    <Link to="/principal"><button type="button" name="button" className="btn teal darken-4 btnLogin"> Ingresar</button></Link>
                    </form>
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
            );
        }
      }

export default Login;
