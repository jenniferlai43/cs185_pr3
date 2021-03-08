/* eslint no-undef: 0 */ // --> OFF
import {useState, useEffect} from 'react';

const UpdateTask = ({oldTask, onUpdate}) => {
	// let oldTask = {
	// 	"title": 'hi',
	// 	"day": '342423',
	// 	"important": false
	// }

	const [title, setTitle] = useState(oldTask.title || '');
	const [day, setDay] = useState(oldTask.day || '');
	const [textInfor, setTextInfor] = useState(oldTask.textInfor || '');
	const [important, setImportant] = useState(oldTask.important || false);
	// console.log(title, day, important)
	// console.log(typeof important);

	// useEffect(() => {
	// 	setTitle(title);
	// 	setDay(day);
	// 	setImportant(important);
	// }, []);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('submitting ', important);
		onUpdate(oldTask.id, title, day, important, textInfor);
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label>Meeting</label><br/>
				<input type='text'
						placeholder='Add meeting name'
						value={title}
						onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div>
				<label>Link</label><br/>
				<input type='text'
						placeholder='Add link'
						value={textInfor}
						onChange={(e) => setTextInfor(e.target.value)} />
			</div>
			<div>
				<label>Date</label><br/>
				<input type='text'
						placeholder='Add date'
						value={day}
						onChange={(e) => setDay(e.target.value)} />
			</div>
			<div>
				<label>Important</label>
				<input type='checkbox'
						checked={important}
						value={important}
						onChange={(e) => {
							setImportant(e.target.checked);
						}} />
			</div>
			<input type='submit' value='Save'/>
		</form>
	);
};

export default UpdateTask;