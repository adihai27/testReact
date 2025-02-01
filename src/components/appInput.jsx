import React, { useRef } from 'react'

export default function AppInput() {

    const inputRef = useRef();

    const changeColor = () => {
        console.log(inputRef.current.value);
    }

    return (
        <div className='container'>
            <h2>appInput</h2>
            <input ref={inputRef} type="text"/>
            <button onClick={changeColor}>choose</button>
        </div>
    )
}
