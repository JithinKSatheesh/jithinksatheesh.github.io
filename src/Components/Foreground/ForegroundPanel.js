import React from 'react'
import './ForegroundPanel.css'
// import NavDock from '../NavDock/NavDock'
import Widgets from '../Widgets/Widgets'

import {Widget1,Widget2,Widget3,Widget4,Widget5} from '../Widgets/WidgetContainers'
import Showcase from '../Showcase/Showcase'
import {Showcasecontents1} from '../Showcase/ShowcaseContents'

export default function Foregroundpanel(props) {
    

    return (
        <>
            <div className="foregroundpanel">
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="space-50"></div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-6">
                        <div className="text-white h3">
                            Hi, <br/>
                            I am JithinKSatheesh
                        </div>
                        <div className="space-20"></div>
                        <Widgets widgetbody={<Widget1/>}/>
                        <div className="space-20"></div>
                        <Widgets widgetbody={<Widget2/>}/>
                        <div className="space-20"></div>
                        <Widgets widgetbody={<Widget5/>}/>
                        <div className="space-20"></div>
                        <Widgets widgetbody={<Widget3/>}/>
                        
                        <div className="space-20"></div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <div className="space-50"></div>
                        <Showcase content={<Showcasecontents1/>} title={"My projects"}  subtitle={"Websites"}/>
                    </div>
                </div>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="row d-flex">
                    <div className="col col-12 col-md-6 order-2 order-md-1">
                        <div className="text-white h3">
                            About Me
                        </div>
                        <div className="space-20"></div>
                        <Widgets widgetbody={<Widget4/>}/>
                    </div>
                    <div className="col col-12 col-md-6 order-1 order-md-2">
                        <div className="space-50"></div>
                        {/* <Showcase  title={"My projects"}  subtitle={"Logos & illustrations"}/> */}
                    </div>
                </div>
                <div className="space-50"></div>
                <div className="space-50"></div>
                <div className="text-center font-weight-light text-white">Designed and developed by me </div>
                <br/>
                {/* <div className="text-center font-weight-light text-white"> You can free download the code <a href="https://">here</a>  and <br/>    feel free to use it anyway you want </div> */}

                <div className="space-50"></div>
            </div>
            </div>
        </>
    )
}
