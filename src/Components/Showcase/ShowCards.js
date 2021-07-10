import React, { useState } from "react"
import { animated, useSpring } from "react-spring"



function Showcard1(props) {

    const [expand,setExpand] = useState(false)

    // on reveal animations
    const [springProps, setSpringProps] = useSpring(() => ({
        opacity: 1,
        width: "200px",
        from: {  opacity: 0, width: "1px"},
        config: { mass: 20, tension: 550, friction: 40 } ,
        delay: 500
    }))
    // ===========================================
    

    return (
        <>
            <animated.div 
                className={`showCard  m-3 p-2 ${expand?"width-100":""}`}
                style={{opacity:springProps.opacity}} 
                onClick={()=>expand?setExpand(false):setExpand(true)}
                >
                <div className={`show_close ${expand?"":"showCard_no"} `}>
                    <svg fill="red" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                </div>

                <img src={props.image} style={{width:"100%"}} className="img-fluid" alt=""/>

                <a href={props.visit} target="_blank" rel="noopener noreferrer" className='p-1' >
                <div className={`${expand?"showCard_yes":"showCard_no"}` }>
                    <div className="space-20"></div>
                    <div className="small text-center text-dark">
                        {props.title}
                    </div>
                    <div className="small text-center text-primary">
                            visit website
                    </div>
                </div>
                </a> 
                
            </animated.div>
        </>
    )
}

export {Showcard1}