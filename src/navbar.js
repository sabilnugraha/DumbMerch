
import './App.css';
import logo from './asset/Frame.png';
import {useNavigate} from "react-router-dom";

const Nav = () =>{
    const navigate = useNavigate()
    const HandleProfile = ()  => {
        navigate('/profile')
    }
    return(
        
        <nav>
           
            <div className="right-bar">
<img className="logoMenu" src={logo} />




<ul className="left-bar">
  <li><a className="menu" href="#home">Complain</a></li>
  <li><a className="menu" src={HandleProfile}>Profil</a></li>
  <li><a className="menu" href="#contact">Log Out</a></li> 
</ul>
</div>


</nav>

    );
}

export default Nav