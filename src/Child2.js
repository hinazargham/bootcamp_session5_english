import React , {useReducer} from 'react';
import numberReducer from './numberReducer';

function Child() {
    let [state, dispatch]= useReducer(numberReducer,50)
    return (
        <div>
            <h3> 
            Child 2
            <br/> 
            Child2 numbers : {state}

            <button onClick={()=> { dispatch({type: 'INCREMENT'}); }}> Increment by 1 </button>
            <button onClick={()=> { dispatch({type: 'DECREMENT'}); }}> Decrement by 1 </button>


            <button onClick={()=> { dispatch({type: 'INCREMENT_10', val : 10 }); }}> Increment by 10 </button>
            <button onClick={()=> { dispatch({type: 'DECREMENT_10', val : 10 }); }}> Decrement by 10 </button>
    
            </h3>
            
        </div>
    )
}

export default Child;