import React,{useRef} from 'react';
import {useSpring} from 'react-spring'


import './App.css';
import './Bootstrap/bootstrap.min.css'

import BackgroundCircle from './Components/Background/BackgroundCircles'
import ForegroundPanel from './Components/Foreground/ForegroundPanel'
import NavDock from './Components/NavDock/NavDock'

const calc = (x,y)=>{return([x - window.innerWidth / 2, y - window.innerHeight / 2])}

function App() {

  const scrollRef = useRef()

  const [springProps,setSpring] = useSpring(()=>({
      xy:[0,0],
      scrollPos : 0,
      config: { mass: 10, tension: 550, friction: 140 }
  }))

  const handleScroll = ()=>{
    const scrollPos = scrollRef.current.scrollTop;
    setSpring({scrollPos})
  }

  const _Style={
    position:{
      position:'fixed',
      width:'100%',
      height:'100%',
      zIndex:'100000',
      overflowY:'scroll',
    }
  }

  return (
    <div 
      style={_Style.position}
      className="App"  
      onScroll={handleScroll}
      ref={scrollRef}
      onMouseMove={({clientX:x,clientY:y})=>setSpring({xy : calc(x,y)})}
      >
        <BackgroundCircle mouseXY={springProps.xy} scrollPos={springProps.scrollPos}  />
        <ForegroundPanel/>
        <NavDock/>
    </div>
  );
}

export default App;
