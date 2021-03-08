/* eslint no-undef: 0 */ // --> OFF
import Task from './Task';

const Tasks = ({tasks, onDelete, onUpdate}) => {
	return (
		<div>
			{tasks.map((task) =>
				<Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>)}
		</div>
	);
};

export default Tasks;