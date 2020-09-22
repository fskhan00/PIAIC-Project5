import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = ()=> {
    let[state,dispatch] = useReducer(CounterReducer, 10)
    return(
        <div>
            <p>This is second child updated using counterReducer: {state}</p>
            <button onClick={()=> {dispatch('INCREMENT')}}>Update Reducer</button>
        </div>
    )

}

export default Child2