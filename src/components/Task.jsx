/* eslint no-undef: 0 */ // --> OFF

const Task = ({task, onDelete, onUpdate}) => {
	return (
		<div onDoubleClick={() => onUpdate(task.id)}>
			<h3> {task.title}
				<div onClick={() => onDelete(task.id)}>
					Delete
				</div>
			</h3>
			<p>{task.day}</p>
			{task.important && <p>Important</p>}
		</div>
	);
};

export default Task;