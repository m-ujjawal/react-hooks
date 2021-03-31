import React, { useState } from "react";
import useCustomCounter from "./useCustomCounter";

function CustomCounterOne() {

    //Duplicate code in CustomCounterOne and CustomCOunterTwo
    //Replaced with useCustomCounter hook.
    // const [count, setCount] = useState(0)

    // const incrementCounter = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const decrementCounter = () => {
    //     setCount(prevCount => prevCount - 1)
    // }
    // const resetCounter = () => {
    //     setCount(0)
    // }

    const [count, incrementCounter, decrementCounter, resetCounter] = useCustomCounter(0, 1);

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incrementCounter}>
                Increment Counter
            </button>
            <button onClick={decrementCounter}>
                Decrement Counter
            </button>
            <button onClick={resetCounter}>
                Reset Counter
            </button>
        </div>
    )
}
export default CustomCounterOne
