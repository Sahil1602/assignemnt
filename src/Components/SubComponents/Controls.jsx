import {Joystick as Joy} from "react-joystick-component";
import React, { useState } from 'react'


function Controls() {
    const [direction, setDirection] = useState(null)

    const handleMove = (evt) => {
        setDirection(evt.direction)
    }

    const start = (evt) => {
        setDirection(evt.direction)
    }

    const stop = (evt) => {
        setDirection(evt.direction)
    }

    return (
        <Joy 
            size={200}
            baseColor="radial-gradient(circle, rgba(255,255,255,1) 39%, rgba(237,125,49,1) 100%)"
            stickColor={direction === "FORWARD" ? "#800080": direction === "BACKWARD" ? "#00ff00": direction === "LEFT" ? "#ffff00": direction === "RIGHT" ? "#ff0000": "#676767"}
            move={handleMove}
            start={start}
            stop={stop}
            throttle={100}
        />
    )
}

export default Controls