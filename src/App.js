import logo from './asset/Frame.png';
import './App.css';
import './bootstrap.css'
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <Container>
  <Row>
    <Col>
    <div className="left">
      <img className="logo ms-1" src={logo} />
      <h2 className="Text mt-3">Easy, Fast, and Relieble</h2>
      <h5 className="Text-detail">Go Shopping for Merchandise, just go to dumb merch shopping. The biggest merchandise in Indonesia</h5>
      <div className='button-group'>
      <a className='login' type='button'>Log In</a>{' '}
      <Button className='button-register' variant="secondary">Register</Button>{' '}
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
        Submit
      </a>
</Form>
    </div>
    </div>
    </Col>
  </Row>
</Container>

    </div>
  );
}

export default App;
