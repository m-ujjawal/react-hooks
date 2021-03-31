import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state;
    }
}
function CounterTwo() {
    const [count, dispach] = useReducer(reducer, initialState);
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispach({ type: 'increment', value: 1 })}>
                Increment first counter by 1
            </button>
            <button onClick={() => dispach({ type: 'decrement', value: 1 })}>
                Decrement first counter by 1
            </button>
            <button onClick={() => dispach({ type: 'increment', value: 5 })}>
                Increment first counter by 5
            </button>
            <button onClick={() => dispach({ type: 'decrement', value: 5 })}>
                Decrement first counter by 5
            </button><br/>
            <button onClick={() => dispach({ type: 'increment2', value: 1 })}>
                Increment second counter by 1
            </button>
            <button onClick={() => dispach({ type: 'decrement2', value: 1 })}>
                Decrement second counter by 1
            </button><br/>
            <button onClick={() => dispach({ type: 'reset' })}>
                Reset
            </button>
        </div>
    )
}
export default CounterTwo