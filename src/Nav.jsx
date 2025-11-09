import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
import { FaSearchDollar } from "react-icons/fa";

function Navs() {
  return (
    <>
    <div className='outerhome'>
      
      
      <nav className='Navhome'>
        <div id='logo'>

      </div>
      
        <ul className='unorderlist'>
          <li>HOME</li>
          <li>LINK</li>
          <li>Important Question</li>
          <li>ABOUT</li>
          <div id='searchdiv'>
          <input type='search' id='search' placeholder=' search here'></input>
          <button type='search' id='searchbutt'><FaSearchDollar /></button>
          </div>
          <h1></h1>
          
        </ul>
        
        <div id='Logindiv'>
          <button type='button' id='logbutt'> Login</button>
        </div>
      </nav>
      
    </div>
    
    
    
    
    </>
  );
}

export default Navs;