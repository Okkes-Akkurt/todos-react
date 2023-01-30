import { useState } from "react"


function Header({ alltodos, setAllTodos, setMainTodos }) {

	const [newItem, setNewItem] = useState('');

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (newItem === '') return false;
		const id = alltodos.length + 1;
		setAllTodos([...alltodos, { 'id': id, 'taskName': newItem, 'complete': false }])
		setMainTodos([...alltodos, { 'id': id, 'taskName': newItem, 'complete': false }])
		setNewItem('')
	}

	return (
		<div>
			<header className="header">
				<h1>todos</h1>
				<form onSubmit={onSubmitForm}>
					<input className="new-todo" placeholder="What needs to be done?" autoFocus
						value={newItem}
						onInput={(e) => setNewItem(e.target.value)}
					/>
				</form>
			</header>
		</div >
	)
}

export default Header