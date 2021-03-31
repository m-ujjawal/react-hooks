import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);
    //If we use prevCount, no need of give count as dependency
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    // const tick=()=>{
    //     setCount(count+1)
    // }
    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[count])

    return (
        <div>
            <h1>Count - {count}</h1>
        </div>
    )

}
export default IntervalHookCounter