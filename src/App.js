import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
function App() {
  return (
    <>
      <Navbar title="Text Tools" home="Home" about="About Us"/>
      <div className="container my-5">
      <Textform headings='Enter your text here'/>
      </div>
    </>
/*<About/>*/
  );
}

export default App;
