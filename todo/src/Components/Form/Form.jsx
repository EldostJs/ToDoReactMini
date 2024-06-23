import React, { useState } from 'react'
import StyleForm from './Form.module.css'

function Form(props) {
    const [value, setValue] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault()
            props.putTodo(value)
            setValue('')
        }}>
            <input
                className={StyleForm.inp}
                type="text"
                placeholder='Write your plans'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default Form
