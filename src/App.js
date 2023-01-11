import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Help from './components/Header/Navbar/Help'
import About from './components/Header/Navbar/About'
import Contact from './components/Header/Navbar/Contact'

import Header from './components/Header/Header'
import Home from './components/Home'




import './Header.css'
import './index.css'


function App() {
  return (
    <div>
      <Header />


<Routes>
  <Route path = '/' element = {<Home />} /> 
  <Route path = 'about' element = {<About />} />     
  <Route path = 'contact' element = {<Contact />} /> 
  <Route path = 'store' element = {<Help />} />  
</Routes>
    
      
    
    </div>
  )
}

export default App