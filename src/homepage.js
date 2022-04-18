import Nav from './navbar'
import { Navbar, Container } from "react-bootstrap";
import './App.css';
import { Card, Col, Button } from 'react-bootstrap';
import mouse from './asset/mouse.png';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Nav />
      <div className='content-product'>
      <h3 className='product'>Product</h3>
<div className='cardproduct'>
      <div className="cards col-3">
      <Card className="card mt-3 bg-dark" style={{ width: '18rem' }}>
     
  <Card.Img variant="top " src={mouse} />
  <Card.Body>
    <h4 className='product'>Mouse</h4>
    <Card.Text className='text-muted'>
      Rp.500.000 <br/>
      Stock: 600
      
    </Card.Text>
  </Card.Body>
  </Card>
  </div>

  </div>

      </div>
    </div>
  );
};

export default Homepage;