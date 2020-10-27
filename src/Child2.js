import React , {useReducer} from 'react';
import numberReducer from './numberReducer';

function Child() {
    let [state, dispatch]= useReducer(numberReducer,1)
    return (
        <div>
            <h3> 
            Child 2 ( using useReducer )
            <br/> 
            Child2 numbers : {state}

            <button class="btn2" onClick={()=> { dispatch({type: 'INCREMENT'}); }}> Increment by 1 </button>
            <button class="btn3" onClick={()=> { dispatch({type: 'DECREMENT'}); }}> Decrement by 1 </button>

            <button class="btn4" onClick={()=> { dispatch({type: 'INCREMENT_10', val : 10 }); }}> Increment by 10 </button>
            <button class="btn5" onClick={()=> { dispatch({type: 'DECREMENT_10', val : 10 }); }}> Decrement by 10 </button>
    
            </h3>
            
        </div>
    )
}

export default Child;