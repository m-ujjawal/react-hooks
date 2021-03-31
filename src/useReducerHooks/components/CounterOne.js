import React, { useReducer } from 'react'

const initialState = 0;
//reducer method takes the state and action as parameter and return the new state
const reducer = (currentState, action) => {
    switch (action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}
function CounterOne() {
    //useReducer takes a function called reducer in 1st argument and initialstate in 2nd arg
    //and returns current state and dispatch method which is used to execute the code corresponding to particular action or dispatch the particular action
    //dispatch method is capable of accepting the action to execute the code specified in the render function
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <div>count - {count}</div>
            <button onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button onClick={() => dispatch('decrement')}>
                Decrement
            </button>
            <button onClick={() => dispatch('reset')}>
                Reset
            </button>
        </div>
    )
}
export default CounterOne