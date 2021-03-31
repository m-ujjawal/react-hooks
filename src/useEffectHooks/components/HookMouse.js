import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = (e) => {
        console.log('logMousePosition event');
        setX(e.clientX);
        setY(e.clientY);
    }
    //To call useEffect only once 
    //i.e. to mimic componentDidMount just to mention empty array 
    //as a second parameter of useEffect, which means we tell react that
    // our useEffect doesn't depend on any props or state so 
    //there is no reasons to call this effect when components re-renders
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)
        
        //return function of the function passed in useEffect is the cleanup function 
        //i.e. mimic componentWillUnmount 
        return () => {
            console.log('COmponent unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}
export default HookMouse