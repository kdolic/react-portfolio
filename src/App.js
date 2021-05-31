import React, {useState, useEffect} from 'react'
import Navbar from './components/Nav/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import JsonData from './data/data.json'

import './css/App.css'

const App = () => {
  const [pageData, setPageData] = useState({})

  useEffect(() => {
    setPageData(JsonData)
  }, [])

  return (
   <div>
     <Navbar/>
     <Home data={pageData.Home}/>
     <About data={pageData.About}/>
     <Projects data={pageData.Projects}/>
     <Contact data={pageData.Contact}/>
     <Footer data={pageData.Footer}/>
   </div>
  );
}

export default App;
