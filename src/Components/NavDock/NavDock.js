import React from 'react'
import './NavDock.css'
import iconhome from '../../images/home.svg'
import iconphone from '../../images/phone.svg'
import iconmail from '../../images/mail.svg'
import iconlinkedin from '../../images/linkedin.svg'

export default function Navdock(props) {
    

    return (
        <>
            <div className="navDock p-3">
                <div className="d-flex justify-content-around">
                    <img className="nav_icon" src={iconhome} alt=""/>
                    <img className="nav_icon" src={iconphone} alt=""/>
                    <a href="mailto:jithinksatheesh@gmail.com">
                        <img className="nav_icon" src={iconmail} alt=""/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/mynetwork/">
                        <img className="nav_icon" src={iconlinkedin} alt=""/>
                    </a>

                </div>
            </div>
        </>
    )
}
