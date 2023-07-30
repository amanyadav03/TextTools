import React, {useState}from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
  const[text, setText] = useState('');
  
  const handleonClick=()=>{
    console.log("upper case was clicked" +text)
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleonClick2=()=>{
    console.log("lower case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleonChange=(event)=>
  {
    console.log("on Change")
    setText(event.target.value)
  }
  return (
    <>
    <div className='container'>
        <div className="mb-3 ">
        <label htmlFor="typetext" className="form-label">
        <h2>{props.headings }</h2>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="typetext"
          rows="8"
        ></textarea>
      </div>
      <button className=" btn btn-primary" onClick={handleonClick}>Convert to Upper Case</button>
      <button className=" btn btn-primary mx-2" onClick={handleonClick2}>Convert to Lower Case</button>
    </div>
  
    <div className="container my-5" >
        <h2>Text Summary</h2>
        <p>Number of characters : {text.length} </p>
        <p>Number of words : {text.split(" ").length}</p>
        <p>Time Taken to read the whole text : {0.4*text.split(" ").length} seconds</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
Textform.propTypes={
  headings: PropTypes.string.isRequired
}

