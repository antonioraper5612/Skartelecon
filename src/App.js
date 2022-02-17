import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './components/Home';

import './App.css';
import AboutUS from './views/AboutUs';
import Planes from './views/Planes';
import Contact from './views/Contact';
import TestVelocidad from './views/TestVelicidad';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/quienesSomos' element={<AboutUS/>}/>
       <Route path='/planes' element={<Planes/>}/>
       <Route path='/contact/:plan' element={<Contact/>} /> 
       <Route path='/testVelocidad' element={<TestVelocidad/>} />
       <Route path='/contact' element={<Contact/>} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
