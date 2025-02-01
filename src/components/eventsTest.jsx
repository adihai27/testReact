import React from 'react'

export default function EventsTest() {

    const onBtnClick = () => {
        alert("click")
    }

    return (
        <div className='container'>
            <h2>eventsTest</h2>
            <button onClick={onBtnClick}> click 1 </button>
            <button>click 2</button>
        </div>
    )
}
