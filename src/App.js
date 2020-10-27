import React , {useState} from 'react';

import './App.css';
import Parent from'./Parent.js';
import ValueContext from './ValueContext';


function App() {


  //Update useContext to work with useState

  let value= useState(50);
  

  return (

    <ValueContext.Provider value={value}>
      <div>
      <h2> Hello from App.js </h2>
      <Parent></Parent>
      
    </div>
    </ValueContext.Provider>
    
  );
}

export default App;
