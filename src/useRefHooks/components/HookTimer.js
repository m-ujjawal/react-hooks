import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
         intervalRef.current = setInterval(() =>
            setTimer(prevTimer =>
                prevTimer + 1), 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    //useEffect without useRef, get error on button click to clear timer
    // useEffect(() => {
    //     const interval = setInterval(() =>
    //         setTimer(prevTimer =>
    //             prevTimer + 1), 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])
    return (
        <div>
            Hook Timer - {timer}
            {/* Error: 'interval' is not defined  no-undef, 
            this is because interval is defined inside 
            useEffect and it's scope is limited inside useEffect only 
            To solve this problem use useRef*/}
            {/* <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button> */}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}
export default HookTimer