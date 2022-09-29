// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light')    //whether dark mode is enabled or not
  const [btn,setBtn] = useState('Enable Dark Mode')
  const [alert,setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode=='dark'){
      setMode('light');
      setBtn('Enable Dark Mode')
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
      document.title = 'TextUtils - Light Mode'
      setTimeout(() => {
        showAlert('Dark mode has been enabled','success')
      }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils is an Amazing mode'
      // }, 2000);
    }
    else{
      setMode('dark');
      setBtn('Enable Light Mode')
      document.body.style.backgroundColor='#083970';
      document.title = 'TextUtils - Dark Mode'
      showAlert('Dark mode has been enabled','success')
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About2"/> */}
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} btn={btn}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          {/* /users --> Component-1
          /users/home --> Component2 */}
          <Route path='/about' element={<About/>} />
          <Route index element={<TextForm/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
