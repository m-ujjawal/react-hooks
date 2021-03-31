import React, { useState } from 'react'

function HookCounterTwo() {
    const initilCount = 0;
    const [count, setCount] = useState(initilCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            //Not safe it will only increment 1 even after 5 loops.
            //always pass function having access of prevCount value in setCount method
            // instead of value whenever we need to update based on prevState
            //setCount(count + 1) //Wrong and unsafe way
            setCount((prevCount => prevCount + 1))//can name anything but recomended to use prevCount
        }
    }

    return (
        <div>
            Count: {count}<br />
            {/*
            //Unsafe way, use prevCount
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement Count
            </button>
            <button onClick={() => setCount(initilCount)}>
                Reset
            </button> */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Increment Count
            </button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>
                Decrement Count
            </button>
            <button onClick={() => setCount(initilCount)}>
                Reset
            </button>
            <button onClick={incrementFive} >Increment 5</button>
        </div>
    )
}

export default HookCounterTwo