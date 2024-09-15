import { Component } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from './Pages/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

export default class App extends Component{
  render(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  }
}

// export default App;
