import React, { Component, Fragment } from 'react';
import "./App.css";
import {Provider} from 'react-redux';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import store from './store';
// import './sass/main.scss';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import ProductsViews from "./components/ProductsViews";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/products" component={ProductsViews} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Fragment>
    </Provider>
  );
}

export default App;







