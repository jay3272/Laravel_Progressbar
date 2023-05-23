import React from 'react'
import ReactDOM from 'react-dom'

const HelloWord = () => {
    return (
        <p>Hello React</p>
    )
}

ReactDOM.render(<HelloWord />, document.getElementById('main'))