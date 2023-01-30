import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import FooterSection from './FooterSection'
import Header from './Header'
import MainSection from './MainSection'

function Homepage() {

	const [mainTodos, setMainTodos] = useState([]);
	const [alltodos, setAllTodos] = useState([]);

	useEffect(() => {
		localStorage.setItem('taskList', JSON.stringify(alltodos));
	}, [alltodos]);

	useEffect(() => {
		const alltodos = JSON.parse(localStorage.getItem('taskList'));
		if (localStorage.getItem('taskList') !== null) {
			setAllTodos(alltodos);
		}
	}, []);


	return (
		<div>
			<section className="todoapp">
				<Header alltodos={alltodos} setAllTodos={setAllTodos} setMainTodos={setMainTodos} />
				<MainSection mainTodos={mainTodos} setMainTodos={setMainTodos} />
				<FooterSection alltodos={alltodos} setAllTodos={setAllTodos} mainTodos={mainTodos} setMainTodos={setMainTodos} />
			</section>

			<Footer />

		</div>
	)
}

export default Homepage