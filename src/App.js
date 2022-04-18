import React from "react";
import logo from './asset/Frame.png';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Homepage from './homepage'
import Home from './home'
import Detailproduct from './detailproduct'





function App() {
  



  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/" element={<Home />} />
    <Route path="/detail-product" element={<Detailproduct />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
