import React , {useContext} from 'react';
import ValueContext from './ValueContext';

function Child() {
    let value =useContext(ValueContext);
    return (
        <div>
            <h3> Child <br/> Child numbers: {value}</h3>
        </div>
    )
}

export default Child;