import "./App.css";
import Color from "./components/Color";
import React, { useState } from 'react';


function App() {
  const [hex, setHex] = useState("#ffffff");

  return (
    <div className="App" style={{backgroundColor:`${hex}`}} >
     <Color hex={hex} setHex={setHex}/>
    </div>
  );
}

export default App;
