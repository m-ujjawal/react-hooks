import React, { useEffect, useState } from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0);
    
    //takes function as an arg which runs after every render of the component
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Clicked {count} times
                </button>
        </div>
    )
}
export default HookCounterOne