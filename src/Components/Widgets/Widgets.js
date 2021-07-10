import React, { useState } from "react"
import { animated, useSpring } from "react-spring"

import './Widgets.css'

export default function Widgets(props) {

    // on reveal animations
    const [springProps, setSpringProps] = useSpring(() => ({
        opacity: 1,
        width: "100%",
        from: {  opacity: 0, width: "1%"},
        config: { mass: 10, tension: 350, friction: 100 } ,
        delay: 500
    }))
    // ===========================================

    

    return (
        <>
           <animated.div style={{opacity:springProps.opacity,width:springProps.width}} className="widgetCard p-2">
                {props.widgetbody}
           </animated.div>
        </>
    )
}
