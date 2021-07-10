import React,{useRef,useEffect} from 'react'
import './BackgroundCircle.css'

import { animated} from 'react-spring'


// const trans1 = (x, y) => `translate3d(${-x / 10 }px,${-y / 20}px,0)`
// const trans2 = (x, y) => `translate3d(${-x / 30 }px,${-y / 40}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 20 }px,${-y / 20}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 30 }px,${y / 20}px,0)`
// const trans5 = (x, y) => `translate3d(${-x / 10 }px,${-y / 20}px,0)`
// const trans6 = (x, y) => `translate3d(${-x / 10 }px,${-y / 20}px,0)`
// const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 

const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.5}px)`)
const transfromSlide_N2 = (val)=>(`translate(0px,-${val * 0.3}px)`)
const transfromSlide_N3 = (val)=>(`translate(0px,-${val * 0.1}px)`)

const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.5}px)`)
const transfromSlide_S2 = (val)=>(`translate(0px,${val * 0.3}px)`)
const transfromSlide_S3 = (val)=>(`translate(0px,${val * 0.1}px)`)

    
export default function Backgroundcircles(props) {


    return (
        <>
            <div  className="backgroundCircle">
   
                <animated.div style={{transform: props.scrollPos.interpolate(transfromSlide_N1), }}  className="circle_1"></animated.div>
                <animated.div style={{transform: props.scrollPos.interpolate(transfromSlide_N2), }} className="circle_2"></animated.div>
                <animated.div style={{transform: props.scrollPos.interpolate(transfromSlide_N3), }} className="circle_3"></animated.div>

                <animated.div  style={{transform: props.scrollPos.interpolate(transfromSlide_S1), }} className="circle_4"></animated.div>
                <animated.div  style={{transform: props.scrollPos.interpolate(transfromSlide_S2), }} className="circle_5"></animated.div>
                <animated.div  style={{transform: props.scrollPos.interpolate(transfromSlide_S3), }} className="circle_6"></animated.div>

                <animated.div style={{transform: props.scrollPos.interpolate(transfromSlide_N1), }} className="circle_7"></animated.div>
                <animated.div  style={{transform: props.scrollPos.interpolate(transfromSlide_N2), }} className="circle_8"></animated.div>
                <animated.div  style={{transform: props.scrollPos.interpolate(transfromSlide_N3), }} className="circle_9"></animated.div>




            </div>
        </>
    )
}
