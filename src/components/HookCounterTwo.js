import React, { useState } from 'react';

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={setCount(prevState => prevState + 1)}>+</button>
            <button onClick={setCount(prevState => prevState - 1)}>-</button>
            <button onClick={setCount(initialCount)}>0</button>
        </div>
    )
}

export default HookCounterTwo
