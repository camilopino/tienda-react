import React from 'react';
import { render, ReactDOM} from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Vermas from './componentess/componentes/vermas/vermas.jsx';
import Login from './componentess/componentes/login/login.jsx';
import Principal from './componentess/componentes/principal/principal.jsx';
import Carrito from './componentess/componentes/carrito/carrito.jsx';
import BarraSuperior from './componentess/componentes/barra_superior/barra_superior.jsx';

      render(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/principal">
                        <Principal />
                    </Route>
                    <Route exact path="/vermas">
                        <Vermas />
                    </Route>
                    <Route exact path="/carrito">
                        <Carrito />
                    </Route>
                </Switch>
            </BrowserRouter>,
            document.getElementById("app")
            )
