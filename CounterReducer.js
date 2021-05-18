import React, {useReducer} from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'reset':
            return initialState
        case 'decrement':
            return state-1
        default: 
            return state
    }
}

function CounterReducer(){
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <h3>Count-{count}</h3>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default CounterReducer