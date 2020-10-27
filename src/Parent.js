import React from 'react';
import Child from './Child.js'
import Child2 from './Child2.js'

function Parent(props) {
    return (
        <div>
            <h2>Parent</h2>
            <Child></Child>
            <Child2></Child2>
        </div>
    );
}

export default Parent;