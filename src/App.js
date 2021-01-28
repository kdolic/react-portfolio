import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
   <div>
     <Navbar isOpen={isOpen} toggle={toggle} />
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
   </div>
  );
}

export default App;
