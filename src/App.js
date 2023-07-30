import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="Text Tools" home="Home" about="About Us"/>
      <div className="container my-5">
      <Textform headings='Enter your text here'/>
      </div>
    </>
  );
}

export default App;
