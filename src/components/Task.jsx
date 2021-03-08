/* eslint no-undef: 0 */ // --> OFF

const Task = ({task, onDelete, onDoubleClick}) => {
	return (
		<div className="task" onDoubleClick={() => onDoubleClick(task.id)}>
			<h3> {task.title}
				<div className="delete" onClick={() => onDelete(task.id)}>
					Delete
				</div>
			</h3>
			<p>{task.day}</p>
			<a target='_blank' href={task.textInfor}>{task.textInfor}</a>
			{task.important && <p>Important</p>}
		</div>
	);
};

export default Task;