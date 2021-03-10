/* eslint no-undef: 0 */ // --> OFF
import {useState} from 'react';
import ErrorBanner from './ErrorBanner';
import SuccessBanner from './SuccessBanner';

const UpdateTask = ({oldTask, onUpdate}) => {
	const [title, setTitle] = useState(oldTask.title || '');
	const [day, setDay] = useState(oldTask.day || '');
	const [textInfor, setTextInfor] = useState(oldTask.textInfor || '');
	const [important, setImportant] = useState(oldTask.important || false);
	const [errorMsgs, setErrorMsgs] = useState([]);
	const [successMsg, setSuccessMsg] = useState('');


	const onSubmit = (e) => {
		e.preventDefault();
		let errors = validateForm();
		console.log(errors);
		if (errors.length > 0) {
			setErrorMsgs(errors);
			setSuccessMsg('');
		} else {
			onUpdate(oldTask.id, title, day, important, textInfor);
			setSuccessMsg('Successfully updated entry.');
			clearErrorMsgs();
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
		return (textInfor.length > 0 && textInfor.includes('zoom'))
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
						onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className="form-div">
				<label>Link</label><br/>
				<input className="text-in"
						type='url'
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
			{errorMsgs.length > 0 && <div><ErrorBanner errors={errorMsgs} /><br /></div>}
			{successMsg !== '' && <div><SuccessBanner sMsg={successMsg} /><br /></div>}
			<input className="submit" type='submit' value='Save'/>
		</form>
	);
};

export default UpdateTask;