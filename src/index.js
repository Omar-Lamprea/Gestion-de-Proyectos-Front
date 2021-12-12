import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import Proyectos from './components/Proyectos';
import CrearProyecto from './components/CrearProyecto';
import ListaUsuarios from './components/ListaUsuarios';
import Home from './components/Home';

const client = new ApolloClient({
  uri: 'http://localhost:9092/graphql',
  cache: new InMemoryCache()
});

localStorage.setItem('rol', '=)')



const inicio = document.getElementById("root")

ReactDOM.render(
    <ApolloProvider client={client}>
      <main className='container-fluid p-0'>
        <Router>
          <header className="Menu d-flex p-2 align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src="./img/logo.png" alt="logo"></img>
              </Link>
            </div>
            <nav>
              <ul className="d-flex">
                <Link to ="/proyectos">
                  <li>Proyectos</li>
                </Link>
                <Link to ="/usuarios">
                  <li>Usuarios</li>
                </Link>
              </ul>
            </nav>
            <div>
              <i className="fas fa-user"></i>
            </div>
          </header>
        
        
          <section className='container my-5'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/usuarios" element={<ListaUsuarios />} />
            </Routes>
          </section>
        </Router>
      </main>
    </ApolloProvider>, inicio
)