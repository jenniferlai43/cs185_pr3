/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import {useState, useEffect} from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

const ZoomManagerPage = () => {

	const [tasks, setTasks] = useState([]);
	const [viewMode, setViewMode] = useState(0);
	// 0 -> view schedule, 1 -> view add form

	const [viewUpdate, setViewUpdate] = useState(false);
	const [updateTask, setUpdateTask] = useState({});

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

	const updateTaskById = async (id, title, day, important, textInfor) => {
		const taskToToggle = await fetchTaskById(id);
		const updTask = {title, day, textInfor, important};

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updTask),
		});
		const data = await res.json();
		let newTasks = await fetchTasks();
		setTasks(newTasks);
	};

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			setTasks(tasksFromServer);
		};
		getTasks();
		console.log('calling useEffect');
	}, [viewMode]);

	const toggleUpdateForm = async (id) => {
		let oldTask = await fetchTaskById(id);
		setUpdateTask(oldTask);
		setViewMode(1);
		setViewUpdate(true);
	}

	let viewPage = <Tasks tasks={tasks} onDelete={deleteTaskById} onDoubleClick={toggleUpdateForm}/>;
	if (viewMode === 1) {
		viewPage = <AddTask onAdd={addTask} />;
	}

	let updateForm = <UpdateTask oldTask={updateTask} onUpdate={updateTaskById} />;

	const toggleView = () => {
		let newViewMode = viewMode === 1 ? 0 : 1; 
		setViewUpdate(false);
		setViewMode(newViewMode);
	}

	console.log('viewMode: ', viewMode);
	console.log('viewUpdate: ', viewUpdate);
    return (
      <div className="manager">
      	<button onClick={toggleView}>{viewMode === 0 ? "Add Meeting >>" : "<< View Schedule"}</button>
      	{viewUpdate && updateForm}
      	{!viewUpdate && viewPage}
      </div>
    );
};

export default ZoomManagerPage;