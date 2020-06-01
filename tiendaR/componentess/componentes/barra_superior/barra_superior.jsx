import React from 'react';
import { Link} from 'react-router-dom';

class BarraSuperior extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper blue darken-4">
          <a><i className="material-icons brand-logo">store</i></a>
          <ul className="right">
            <li> <Link to="/principal"><i className="material-icons">home</i></Link></li>
            <li> <Link to="/carrito"><i className="material-icons">shopping_cart</i></Link></li>
            <li><Link to="/"><i className="material-icons">exit_to_app</i></Link></li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default BarraSuperior
