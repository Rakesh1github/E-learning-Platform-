import './Nav2.css'
import { Link } from 'react-router-dom'

function Nav2(){
  return(
    <>
    <div id='nav2'>
      <nav className='navbar'>
        <ul className='list'>
          <li><Link to = '/' >HTML</Link></li>
          <li><Link to='/css'>CSS</Link></li>
          <li><b>JAVASCRIPT</b></li>
          <li><b>REACT</b></li>
          <li><b>NODE</b></li>
        </ul>
      </nav>

    </div>
    </>
  )
}
export default Nav2