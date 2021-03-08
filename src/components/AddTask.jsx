/* eslint no-undef: 0 */ // --> OFF
import {useState} from 'react';
import ErrorBanner from './ErrorBanner';

const AddTask = ({onAdd}) => {
	const [title, setTitle] = useState('');
	const [day, setDay] = useState('');
	const [textInfor, setTextInfor] = useState('');
	const [important, setImportant] = useState(false);
	const [errorMsgs, setErrorMsgs] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();
		let errors = validateForm();
		console.log(errors);
		if (errors.length > 0) {
			setErrorMsgs(errors);
		} else {
			onAdd({title, day, important, textInfor});
			setTitle('');
			setDay('');
			setTextInfor('');
			setImportant(false);
			setErrorMsgs([]);
		}
	};

	const clearErrorMsgs = () => {
		setErrorMsgs([]);
	};

	const checkTitle = () => {
		return (title.length <= 30 && title.length > 0);
	};

	const checkDate = () => {
		var parseDate = new Date(day).getTime();  //change string into Date object into milliseconds
		var nowDate = Date.now();
		return (parseDate > nowDate);
	};

	const checkLink = () => {
		return (textInfor.startsWith('http') && textInfor.includes('zoom'))
	}

	const validateForm = () => {
		let errors = [];
		if (!checkTitle()) {
			errors.push(0);
		}
		if (!checkLink()) {
			errors.push(1);
		}
		if (!checkDate()) {
			errors.push(2);
		}
		return errors;
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="form-div">
				<label>Meeting</label><br/>
				<input className="text-in"
						type='text'
						placeholder='Add meeting name'
						value={title}
						onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<div className="form-div">
				<label>Link</label><br/>
				<input className="text-in"
						type='text'
						placeholder='Add link'
						value={textInfor}
						onChange={(e) => setTextInfor(e.target.value)} />
			</div>
			<div className="form-div">
				<label>Day</label><br/>
				<input className="text-in"
						type="datetime-local"
						id="meeting-time"
       					value={day}
       					onChange={(e) => setDay(e.target.value)} />
			</div>
			<div className="form-div">
				<label>Important</label>
				<input type='checkbox'
						checked={important}
						value={important}
						onChange={(e) => setImportant(e.target.checked)} />
			</div>
			{errorMsgs.length > 0 && <ErrorBanner errors={errorMsgs} />}<br/>
			<input className="submit" type='submit' value='Save'/>
		</form>
	);
};

export default AddTask;