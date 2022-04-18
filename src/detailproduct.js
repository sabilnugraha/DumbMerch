import Nav from './navbar'
import { Card, Col, Button } from 'react-bootstrap';
import mouse from './asset/mouse.png';
import './App.css';

const Detail = () => {
    return(
        <>
        <Nav/>
        <div className="flex-container">
        <div><img className="contentMouse" src={mouse}/></div>
        <div>
            <h3 className='productContent'><strong>Mouse</strong></h3>
            <h6 className='spek'> 
                Stock  : 600
                <br/><br/><br/>
                -Wireless Mouse<br/>
                -Konektivitas Wireless 2,4 GHz<br/>
                -Jarak Wireless hingga 10m<br/>
                - Plug and Play<br/>
                - Baterai tahan 12 tahun<br/><br/>
            </h6>

            <h6 className='spek-detail'>
                Mouse Wirelwss Alytech AL - Y5D, hadir dengan desain tombol mouse yang ringan dan mudah dibawa
                Mouse ibi menggunakan frekuensi radio 2.4 GHz dst..
            </h6>
            <h3 className='productprice'><strong>Rp.300.000</strong></h3>
            <div className="Buy">
            <button className="Buy-btn">Buy</button>
            </div>
        </div>
        
      </div>
</>
      );
    };
    
    export default Detail;