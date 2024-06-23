import React, { useState } from 'react'
import Form from '../Form/Form'
import StyleTodo from './Todo.module.css'
import DeleteIcon from '../Todo/delete.svg'

function Todo() {

    const [todos, setTodos] = useState([])
    const [allTodos , setAllTodos] = useState(0)

    const putTodo = (value) => {
        if (value) {
            setTodos([...todos, { id: Date.now(), text: value, done: true }])
            setAllTodos(allTodos + 1)
        } else {
            alert('! Write text !')
        }
    }


    const remove = (id) => {
        setTodos(todos.filter(todo => todo.id != id))
        setAllTodos(allTodos - 1)

    }

    const clearAll = () => {
        setTodos([])
        setAllTodos(0)
    }


    return (
        <div className={StyleTodo.con}>
            <h1 className={StyleTodo.tit}>Todo List</h1>
            <Form
                putTodo={putTodo}
            />
            <ul className={StyleTodo.tb}>
                {
                    todos.map(todo => {
                        return (
                            <li
                                className={StyleTodo.to}
                                key={todo.id}>
                                {todo.text}
                                <img
                                    className={StyleTodo.ic}
                                    src={DeleteIcon}
                                    alt="Delet"
                                    onClick={e => {
                                        e.stopPropagation()
                                        remove(todo.id)
                                    }}
                                />
                            </li>
                        );
                    })
                }
                <div className={StyleTodo.info}>
                    <span>All Todos: {allTodos}</span>
                    <button className={StyleTodo.btn} onClick={clearAll}>Delete All</button>
                </div>
            </ul>
        </div>
    )
}

export default Todo