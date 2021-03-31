import { useState } from 'react'

//If initailCounter doesn't specified, it will be 0 by-default
function useCustomCounter(initialCount = 0, value) {
    
    const [count, setCount] = useState(initialCount)

    const incrementCounter = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrementCounter = () => {
        setCount(prevCount => prevCount - value)
    }
    const resetCounter = () => {
        setCount(initialCount)
    }
    return [count, incrementCounter, decrementCounter, resetCounter]
}
export default useCustomCounter
