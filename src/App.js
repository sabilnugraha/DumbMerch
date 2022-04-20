import React from "react";
import logo from './asset/Frame.png';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Homepage from './homepage'
import Home from './home'
import Detailproduct from './detailproduct'
import Profile from './profile'





function App() {
  



  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/" element={<Home />} />
    <Route path="/detail-product" element={<Detailproduct />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
