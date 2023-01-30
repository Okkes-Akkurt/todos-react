import React, { useState } from 'react'


function MainSection({ mainTodos, setMainTodos }) {

	const [isComplete, setIsComplete] = useState(false);

	const markComplete = (id) => {
		let list = mainTodos.map(todo => {
			if (todo.id == id) {
				todo.complete = !todo.complete;
				setIsComplete(isComplete)
			}
			return todo;
		})
		setMainTodos(list)
	};

	const deleteTask = (id) => {
		const newList = mainTodos.filter((todo) => todo.id !== id);
		setMainTodos(newList);
	};


	return (
		<div>
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all" onClick={() => setIsComplete(!isComplete)}>
					Mark all as complete
				</label>

				<ul className="todo-list">
					{
						mainTodos.map((task, i) => (
							<li key={i} className={task.complete || isComplete ? 'completed' : ''}>
								<div className="view">
									<input id={task.id} className="toggle" type="checkbox" onChange={(e) => markComplete(e.target.id)}
										checked={task.complete || isComplete ? true : ''}
									/>
									<label>{task.taskName}</label>
									<button className="destroy" onClick={() => deleteTask(task.id)}></button>
								</div>
							</li>
						))
					}
				</ul>
			</section>
		</div>
	)
}

export default MainSection