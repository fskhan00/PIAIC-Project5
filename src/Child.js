import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = ()=> {
    let counterValue = useContext(counterContext)
    console.log(counterValue)

    return (
        <div>
            <p>This is first child updated through CounterContext: {counterValue[0]}</p>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Update Context</button>
        </div>
        
    )
}

export default Child;