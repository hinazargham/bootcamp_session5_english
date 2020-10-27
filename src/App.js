import React from 'react';
import './App.css';
import Parent from'./Parent.js';
import ValueContext from './ValueContext';


function App() {

  //let [number, setNumber] = useState(23);
  let value= 81;
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
