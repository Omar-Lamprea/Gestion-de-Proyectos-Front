import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import "./index.css";

import Proyectos from './components/Proyectos';
import Menu from './components/Menu';
import ListaUsuarios from './components/ListaUsuarios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NoExiste from './components/NoExiste';
import Login from './components/Login';
import EditarProyecto from './components/EditarProyecto';
// import CrearProyecto from './components/CrearProyecto';
// import CrearUsuario from './components/CrearUsuario';


const httpLink = new HttpLink({ uri: 'http://ec2-3-17-16-177.us-east-2.compute.amazonaws.com/graphql/' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const inicio = document.getElementById("root")

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/proyecto/listar" component={Proyectos} />
        <Route exact path="/usuario" component={ListaUsuarios} />
        <Route exact path="/proyecto/:idProyecto" component={EditarProyecto} />
        <Route path="/" component={NoExiste} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>, inicio)