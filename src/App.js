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

  return (
    <BrowserRouter>
      <Provider >
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={  <List />  } />
            <Route path="login" element={<Login />} />
            <Route path="pokemon/:id" element={<View />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>      
      </Provider>
  </BrowserRouter>
  );
}

export default App;
