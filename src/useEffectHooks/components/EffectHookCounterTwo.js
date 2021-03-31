import React, { useEffect, useState } from 'react';

function EffectHookCounterTwo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //for conditionally executing useEffect we pass the second parameter which is an array
    //within this array we need to specify either props or state that we need to watch for
    //Only if those state or props specified in array changes then effect will be executed
    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `Clicked ${count} times`;
    },[count])

    return (
        <div>
            <input type='' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>
                Clicked {count} times
                </button>
        </div>
    )
}
export default EffectHookCounterTwo