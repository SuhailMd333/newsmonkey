import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Form from './components/Form';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter ,
  Routes,
  Route
 
} from "react-router-dom";

 const App = (props) =>{
const [progress,setProgress] = useState(0)
  
 

    return (
      <div>
      
        <BrowserRouter>
       
      
        {/* <Form/> */}
        
        <Navbar />

       < LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={progress}
      />
        
         
        <Routes>
            <Route path="/general"
           element={   <News setProgress={setProgress} pageSize={6} country="in" category="general" />
          }/>
            <Route path="/business" element={
            
              <News setProgress={setProgress}key="business" pageSize={6} country="in" category="business" />
            }/>
            <Route path="/science" element={
              <News setProgress={setProgress}key="science" pageSize={6} country="in" category="science" />
           }/>
            <Route path="/entertainment" element={
              <News setProgress={setProgress}key="entertainment" pageSize={6} country="in" category="entertainment" />
            }/>
            <Route path="/sports" element={
              <News setProgress={setProgress}key="sports" pageSize={6} country="in" category="sports" />
            }/>
              
            <Route path="/technology" element={
              <News setProgress={setProgress}key="technology" pageSize={6} country="in" category="technology" />
            }/>
            <Route path="/health" element={
              <News setProgress={setProgress} key="health" pageSize={6} country="in" category="health" />
            }/>
          </Routes>
          
        </BrowserRouter>
 </div>
    );
   
   
    }
  

export default App;