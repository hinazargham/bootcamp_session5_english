import React , {useContext} from 'react';
import ValueContext from './ValueContext';

function Child2() {
    let value =useContext(ValueContext);
    console.log("value ", value);
    let updateValue = value[1];
    return (
        <div>
            <h3> 
            Child 1 ( using useContext)
            <br/> 
            Child numbers: {value} <button class="btn1" onClick= {()=>{ updateValue(++value[0])}}>Update value by 1</button>
            </h3>
            
        </div>
    )
}

export default Child2;