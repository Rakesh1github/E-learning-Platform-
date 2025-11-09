
import Navs from './Nav.jsx'
import Nav2 from './Nav2.jsx'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'




function App() {


  return (
    <>
    
      <Navs/>
      <Router>
      <Nav2/>
    <h1>Saurabh</h1>

      <Routes>
        
        <Route path='/css' element={<Nav2/>}/>
      </Routes>
      </Router>
      
    
      </>
   
  )
}

export default App
