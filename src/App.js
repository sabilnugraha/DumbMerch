import React from "react";
import logo from './asset/Frame.png';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Homepage from './homepage'
import Home from './home'





function App() {
  



  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
