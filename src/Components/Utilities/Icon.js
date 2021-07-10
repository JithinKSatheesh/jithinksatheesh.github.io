import React from 'react'
import './Icon.css'

export default function Icon(props) {


    return (
        <>
            <div className="m-2">
                <div className="iconBox p-2">
                    <img src={props.image} className="img-fluid" alt=""/>
                </div>
                <div className="text-center p-2 font-weight-bold small">
                    {props.name}
                </div>
            </div>
        </>
    )
}
