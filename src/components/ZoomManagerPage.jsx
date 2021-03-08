/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import {useState, useEffect} from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

const ZoomManagerPage = () => {

	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		return data;
	};

	const fetchTaskById = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	};

	const deleteTaskById = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
		setTasks(tasks.filter((task) => task.id != id));
	};

	const addTask = async (task) => {
		const res = await fetch(`http://localhost:5000/tasks`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});
		const data = await res.json();
		setTasks([...tasks, data]);
	};

	const udpateTaskById = async (id) => {
		const taskToToggle = await fetchTaskById(id);
		const updTask = {...taskToToggle, important: !taskToToggle.important};

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updTask),
		});
		const data = await res.json();
		setTasks(
			tasks.map((task) => 
				task.id === id ? {...task, important: data.important} : task)
		);
	};


	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
	}, []);

    return (
      <div>
      	<AddTask onAdd={addTask} />
      	<Tasks tasks={tasks} onDelete={deleteTaskById} onUpdate={udpateTaskById}/>
      </div>
    );
};

export default ZoomManagerPage;