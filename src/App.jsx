

import Navs from './Nav.jsx'
import Nav2 from './Nav2.jsx'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Hero from './card/heroSec.jsx'






function App() {


  return (
    <>
    
      <Navs/>
      
      <Hero/>
      
      <Router>
      
      
      
    
      <Routes>
        
        <Route path='/css' element={<Nav2/>}/>
      </Routes>
      </Router>
      
    
      </>
   
  )
}

export default App
