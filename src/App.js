import React, {useState} from "react";
import logo from './asset/Frame.png';
import './App.css';
import './bootstrap.css'
import { Row, Col, Container, Button, Form } from 'react-bootstrap';


function Login(props){
  return(
    <div>
  <Container>
  <Row>
    <Col>
    <div className="left">
      <img className="logo ms-1" src={logo} />
      <h2 className="Text mt-3">Easy, Fast, and Relieble</h2>
      <h5 className="Text-detail">Go Shopping for Merchandise, just go to dumb merch shopping. The biggest merchandise in Indonesia</h5>
      <div className='button-group'>
      <a className='login' type='button'>Log In</a>{' '}
      <Button className='button-register' variant="secondary" onClick={props.register}>Register</Button>{' '}
      </div>
    </div>
      </Col>
    <Col>
    <div className='right-side'>
    <div className='right'>
    <h3 className="Text">Login</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input className='inputEmail col-12' type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <input className='inputEmail col-12' type="password" placeholder="Password" />
      </Form.Group>

      <a className="loginform col-12 mt-4" type="submit">
        Log In
      </a>
</Form>
    </div>
    </div>
    </Col>
  </Row>
</Container>
</div>
  )
}

function Register(props){
  return(
    <div>
  <Container>
  <Row>
    <Col>
    <div className="left">
      <img className="logo ms-1" src={logo} />
      <h2 className="Text mt-3">Easy, Fast, and Relieble</h2>
      <h5 className="Text-detail">Go Shopping for Merchandise, just go to dumb merch shopping. The biggest merchandise in Indonesia</h5>
      <div className='button-group'>
      <a className='login' type='button' onClick={props.login}>Log In</a>{' '}
      <Button className='button-register' variant="secondary" onClick={props.register}>Register</Button>{' '}
      </div>
    </div>
      </Col>
    <Col>
    <div className='right-side'>
    <div className='right'>
    <h3 className="Text">Register</h3>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <input className='inputEmail col-12' type="text" placeholder="Enter Name" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input className='inputEmail col-12' type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <input className='inputEmail col-12' type="password" placeholder="Password" />
      </Form.Group>

      <a className="loginform col-12 mt-4" type="submit">
        Register
      </a>
</Form>
    </div>
    </div>
    </Col>
  </Row>
</Container>
</div>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(false)
  console.log('isLogin', isLogin)

  return (
    <div className="App">
     {
        isLogin ? 
          <Register login={() => setIsLogin(false)} /> 
        : 
          <Login register={() => setIsLogin(true)} />

     }


    </div>
  );
}

export default App;
