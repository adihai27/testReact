import React from "react";

export default function Message(props) {

    

    return (
        <div className='w-50 p-3 h3 bg-warning'>
            <h2>Message  : {props.txt}</h2>
            <button onClick={()=>{
                props.hideMessage()
            }}
                className="float-end">
                x
            </button>
        </div>
    )
}