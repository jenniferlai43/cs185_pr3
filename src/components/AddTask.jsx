/* eslint no-undef: 0 */ // --> OFF
import {useState} from 'react';

const AddTask = ({onAdd}) => {
	const [title, setTitle] = useState('');
	const [day, setDay] = useState('');
	const [textInfor, setTextInfor] = useState('');
	const [important, setImportant] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		onAdd({title, day, important});
		setTitle('');
		setDay('');
		setTextInfor('');
		setImportant(false);
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
						onChange={(e) => setImportant(e.target.checked)} />
			</div>
			<input type='submit' value='Save'/>
		</form>
	);
};

export default AddTask;