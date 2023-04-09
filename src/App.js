import logo from './logo.svg';
import Home from './pages/home';

import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';



function App() {
  useEffect(()=>{
    Aos.init({duration: 1000})
        },[]);
  return ( 
    <Home />
    )
    
  
}

export default App;
