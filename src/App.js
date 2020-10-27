import React, { useState } from 'react';
import './App.css';
import Parent from'./Parent.js'

function App() {

  let [number, setNumber] = useState(23);
  return (
    <div>
      <h2> Hello from App.js </h2>
      <Parent num ={number}></Parent>
      <button onClick={()=>{ setNumber(++number) }}>Update Number</button>
    </div>
  );
}

export default App;
