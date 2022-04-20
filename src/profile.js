import Nav from './navbar'
import './App.css';
import sabil from './asset/sabil.jpeg';
import mouse from './asset/mouse.png';
import logo from './asset/Frame.png';
import { Row, Col, Container , Image} from 'react-bootstrap';


function Profile () {
    return(
        <div className='profile'>
        <Nav />
        <Container>
 
  <Row className='justify-content-md-left mt-5 no-gutters'>
    <Col className="col-12 col-sm-6 col-md-8">
    <h3 className='product ms-4'>My Profile</h3>
    <Container>
      <Row className='justify-content-md-left mt-3'>
        <Col className="col-6 ms-0 h-100">
        <Image className='img-fluid w-100'  src={sabil} />
        </Col>
        <Col className='contentProfil'>
        <div>
          <h3 className='product'>Name</h3>
          <p className='textDetail'> Sabil</p>
        </div>

        <div>
          <h3 className='product'>Email</h3>
          <p className='textDetail'> vshnugraha@gmail.com</p>
        </div>

        <div>
          <h3 className='product'>Phone</h3>
          <p className='textDetail'>085258894396</p>
        </div>

        <div>
          <h3 className='product'>Gender</h3>
          <p className='textDetail'>Male</p>
        </div>

        <div>
          <h3 className='product'>Addres</h3>
          <p className='textDetail'>Jl Letjen Suprapto no 1/12 b kec. Kota Kediri, Jawa Timur</p>
        </div>

        </Col>
      </Row>
      </Container>
    </Col>
   
    <Col className="col-12 col-md-4">
    <h3 className='product ms-4'>My Transaction</h3>
    <Container>
    <Row className="transactionBackground">
    <Col className="transaction col-sm-6 col-md-8">

    <Row>
        <Col className="col-6 ms-0">
        <Image className='thumbnail img-fluid h-100 p-1'  src={mouse} />
        </Col>
        <Col className='contentProfil justify-content-left'>
        <div>
          <h8 className='product'>Mouse</h8>
          <p className='textDetailTransactionTime'> <strong>Saturday</strong> 12 June 2001</p>
          
        </div>
        <div>
        <p className='textDetailPrice'> Price : Rp. 500.000</p>
        </div>

        <div>
        <p className='textDetailPrice'> <strong>Sub Total Rp. 500.000</strong></p>
        </div>

        
        </Col>
      </Row>

   
    </Col>
    <Col className="col-6 col-md-4">
    <Image className='thumbnail img-fluid w-50 m-5  ms-5 d-none d-md-block'  src={logo} />
    </Col>
    
    </Row>
    </Container>
    
    </Col>
  </Row>
</Container>
        


  
</div>



        
    )
}

export default Profile