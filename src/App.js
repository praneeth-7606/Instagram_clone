
import React from 'react';
import './App.css';
import Loginpage from './components/loginpage';
import Mainpage from './components/mainpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login2 from './components/login2'
import Style from './components/style'
import Signup from './components/signup';
import Home from './components/home';
import Mainpage2 from './components/mainpage2';
// import Forgot from './components/FORGOT.JS';
import { FirebaseApp } from 'firebase/app';
function App() {
  return (
    <div>

      {/* <Login2/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/mainpage2" element={<Mainpage2/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/mainpage" element={<Mainpage/>}/>  
      <Route path="/signup" element={<Signup/>}/>
      {/* <Route path="/forgot" element={<Forgot/>}/> */}
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
