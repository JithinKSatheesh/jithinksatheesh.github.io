import React from 'react'
import './Badge.css'

export default function Badge(props) {
    

    return (
        <>
            <div className="badgeBody p-2">
                {props.content}
            </div>
        </>
    )
}
