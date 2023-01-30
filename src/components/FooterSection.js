import React, { useState } from 'react'

function FooterSection({ mainTodos, setMainTodos, alltodos, setAllTodos }) {




    const filterNames = ['All', 'Active', 'Completed'];

    const filterTask = (filterName) => {
        if (filterName === 'All') {
            setMainTodos([...alltodos])
        } else if (filterName === 'Active') {
            const filterActive = alltodos.filter((todo) => !todo.complete)
            setMainTodos(filterActive)
        } else if (filterName === 'Completed') {
            const filterCompleted = alltodos.filter((todo) => todo.complete)
            setMainTodos(filterCompleted)
        }
    }

    const deleteCompleted = () => {
        const newlist = mainTodos.filter(todo => todo.complete !== true)
        setMainTodos(newlist)
    };

    return (
        <div>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{mainTodos.length + ' '}</strong>
                    items left
                </span>

                <ul className="filters">
                    {filterNames.map((filterName, i) => (
                        <li key={i}>
                            <a className="selected" name={filterName} onClick={(e) => filterTask(e.target.name)}>{filterName}</a>
                        </li>
                    ))}
                </ul>

                <button className="clear-completed" onClick={deleteCompleted}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default FooterSection