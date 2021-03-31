import React, { useReducer } from 'react'
const initailState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1 }
        case 'decrement':
            return { firstCounter: state.firstCounter - 1 }
        case 'reset':
            return initailState
        default:
            return state;
    }
}
function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initailState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initailState);
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <button onClick={() => { dispatch('increment') }}>
                Increment
            </button>
            <button onClick={() => { dispatch('decrement') }}>
                Decrement
            </button>
            <button onClick={() => { dispatch('reset') }}>
                Reset
            </button>
            
            <div>Second Counter - {countTwo.firstCounter}</div>
            <button onClick={() => { dispatchTwo('increment') }}>
                Increment
            </button>
            <button onClick={() => { dispatchTwo('decrement') }}>
                Decrement
            </button>
            <button onClick={() => { dispatchTwo('reset') }}>
                Reset
                </button>
        </div>
    )
}

export default CounterThree