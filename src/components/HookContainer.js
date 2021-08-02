import React, { useState, useEffect } from 'react'

function HookContainer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `count ${count}`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookContainer
