import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

const [mode,setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =(message, type) => {
  setAlert({
    
    msg : message,
    type: type
  })

  setTimeout(()=> {
    setAlert(null);
  }, 1500);

  
}

const toggleMode= () => {

  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= 'grey';
    showAlert("Dark Mood Enable", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light Mood Enable", "success");
  }  
}
return(
  <>
<Router>
     <Navbar  title ="TEXTERS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert} />    
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About  mode={mode} />
          </Route>

          <Route exact path="/">
          <Textform heading="Enter text to analyze"  mode={mode} showAlert ={showAlert}/>
          </Route>
        </Switch>
    
    </div>
 
    </Router>
  </>
  )
}

export default App;
