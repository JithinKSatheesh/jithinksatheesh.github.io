import React from 'react'
import './Showcase.css'

import Badge from '../Utilities/Badge'

export default function Showcase(props) {
    

    return (
        <>
            <div className="showcase">
                <Badge content={props.title} />
                <div className="space-20"></div>
                <div className="text-white font-weight-bold">{props.subtitle}</div>
                <div className="space-20"></div>

                <div className="row d-flex">
                    {props.content}
                </div>

                <div className="space-20"></div>
            </div>
        </>
    )
}
