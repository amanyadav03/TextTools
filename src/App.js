import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import About from "./Components/About";
import React, {useState} from 'react';

function App() {
  const[mode, setMode]=useState("light")
  const toggleMode=()=>{
    if (mode==="light")
    {setMode("dark")}
    else{
    setMode("light")
    }
  }
  return (
    <>

      <Navbar title="Text Tools" home="Home" about="About Us" mode={mode} toggleMode={toggleMode}/>
 
      <div className="container my-5">
      <Textform headings='Enter your text here'/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
