

import Navs from './Nav.jsx'
import Nav2 from './Nav2.jsx'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Hero from './card/heroSec.jsx'
import Basic from './card/Browse.jsx'
import "./index.css";
import Footer from './HeaderFooter/footer.jsx'
import Card2 from './card/Card2.jsx'







function App() {


  return (
    <>
    
      <Navs/>
      

     
      
      <Hero/>
      <Basic/>
      <Card2/>
      
      
      <Router>
      
      
      <Footer/>
    

      <Routes>
        
        <Route path='/css' element={<Nav2/>}/>
      </Routes>
      </Router>
      
    
      </>
   
  )
}

export default App
