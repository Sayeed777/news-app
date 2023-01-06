import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from './Components/Footer';
import FetchData from './Components/FetchData';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/'   element={<Home/>}/>
          <Route path='/general'    element={<FetchData prop="general"/>}/>
          <Route path='/business'   element={<FetchData prop="business"/>}/>
          <Route path='/entertainment'   element={<FetchData prop="entertainment"/>}/>
          <Route path='/health'   element={<FetchData prop="health"/>}/>
          <Route path='/science'   element={<FetchData prop="science"/>}/>
          <Route path='/sports'   element={<FetchData prop="sports"/>}/>
          <Route path='/technology'   element={<FetchData prop="technology"/>}/>
          
          

        </Routes>
        <Footer/>
      </Router>
    </>
      
        
      
      
    
   
 
  );
}

export default App;
