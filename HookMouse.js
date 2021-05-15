import React, {useState, useEffect} from 'react';

function HookMouse(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logmousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener("mousemove", logmousePosition)
    }, [])
    return(
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}

export default HookMouse