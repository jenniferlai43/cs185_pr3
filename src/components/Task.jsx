/* eslint no-undef: 0 */ // --> OFF

const Task = ({task, onDelete, onDoubleClick}) => {
	return (
		<div className={`task ${task.important ? "important" : ""}`} onDoubleClick={() => onDoubleClick(task.id)}>
			<h3> {task.title} </h3>
				<div className="delete" onClick={() => onDelete(task.id)}>
					Delete
				</div>
			<p>{task.day}</p>
			<a target='_blank' href={task.textInfor}>{task.textInfor}</a>
		</div>
	);
};

export default Task;