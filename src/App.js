import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';
import './Sidebar.css';
import './components/list.css';

import Sidebar from './components/Sidebar';
import NotFound from './components/NotFound';
import List from './components/List';
import View from "./components/View";
import { Login } from "./components/login/Login";
import  Provider  from './components/providers';

function App() {
  const isLogged = window.localStorage.getItem("isLogged");
  return (
    <BrowserRouter>
      <Provider value={ isLogged }>
        <Routes>
          <Route path="/" element={ <Sidebar /> }>
            <Route index element={  isLogged === "true" ?  <List /> : <Login /> } />
            <Route path="login" element={isLogged === "true" ?  <List /> : <Login />} />
            <Route path="pokemon/:id" element={<View />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>      
      </Provider>
  </BrowserRouter>
  );
}

export default App;
