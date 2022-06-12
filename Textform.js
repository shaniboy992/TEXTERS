import React, {useState} from 'react';


export default function Textform(props) {
  const handleUpClick = () =>{

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  }
  const handleLoClick = () =>{

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  }
  const handleCopyClick = (event)=>{
    const area = document.querySelector('#myBox');
    area.select();
    document.execCommand('copy');
    props.showAlert("Copy to clip board", "success");
  }
   
  const handleExtraSpaces = ()=>{
    let newText;
    newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    props.showAlert("Extra Spaces removed", "success");
    }

  const handleCeClick = () =>{

    let newText =function titleCase(str) {
      return str
          .split(' ')
          .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
            }
    setText(newText);
   props.showAlert("First Letter Words are Capitilazed", "success");

  }

  
 

  const handleClClick = () =>{

    let newText =("");
    setText(newText);
    props.showAlert("Text Cleared", "success");

  }
  
  const handleOnChange= (event) =>{

    setText(event.target.value);
  }

  const [text, setText] = useState('Enter Text Here');

return (
<>

<div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>    
    <h1 > {props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}}  value={text} id="myBox" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Lower case</button>
<button className="btn btn-primary mx-1" onClick={handleCeClick}>Capitilaze words</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove spaces</button>
<button className="btn btn-primary mx-1" onClick={handleClClick}>Clear text</button>

</div>
<div className='container'  style={{color: props.mode==='dark'? 'white':'black'}}>
  <h1 className="my-2">Summary</h1>
  <p><b>{text.length}</b> Characters and <b>{text.split(" ").length}</b> Words  |  <b>{0.008 * text.split(" ").length}</b> Minutes read</p>
</div>
<div className="my-3 container"  style={{color: props.mode==='dark'? 'white':'black'}}>
<h2>Preview</h2>
<p>{text.length>0? text : "Enter text to box for preview"}</p>
</div>
</> 
)
  }