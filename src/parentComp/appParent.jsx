import React, { useState } from 'react'
import Message from '../components/message'

export default function AppParent() {

    const [show, setShow] = useState(true)

    const hideMessage = () => {
        setShow(false)
        console.log('hide')
    }

    return (
        <div>
            <h2>Parent comp</h2>
            {show && <Message hideMessage={hideMessage} txt='Work from parent' />}
        </div>
    )
}
