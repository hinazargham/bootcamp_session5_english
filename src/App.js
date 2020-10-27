import React , {useState} from 'react';

import './App.css';
import Parent from'./Parent.js';
import ValueContext from './ValueContext';


function App() {


  //Update useContext to work with useState

  let value= useState(1);
  
  return (

    <ValueContext.Provider value={value}>
      <div>
        <h1>BOOTCAMP Session no. 5 (English Session)</h1>
        <h1>Topic: React’s Context API and useReducer React Hook</h1>
        <br/>
      <h2> Hello from App.js </h2>
      <Parent></Parent>
      
    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
