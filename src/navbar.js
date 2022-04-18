
import './App.css';
import logo from './asset/Frame.png';

const Nav = () =>{
    return(
        
        <nav>
           
            <div className="right-bar">
<img className="logoMenu" src={logo} />
</div>


<div className="left-bar">
<ul>
  <li><a className="menu" href="#home">Complain</a></li>
  <li><a className="menu" href="#news">Profil</a></li>
  <li><a className="menu" href="#contact">Log Out</a></li> 
</ul>
</div>


</nav>

    );
}

export default Nav