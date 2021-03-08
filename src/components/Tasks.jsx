/* eslint no-undef: 0 */ // --> OFF
import Task from './Task';

const Tasks = ({tasks, onDelete, onDoubleClick}) => {
	let hasTasks = tasks.length > 0 ? true : false;
	return (
		<div>
			{
				hasTasks ?
					tasks.map((task) =>
				<Task className="task" key={task.id} task={task} onDelete={onDelete} onDoubleClick={onDoubleClick}/>) :
				
				<p style={{backgroundColor: 'lightgrey', padding: '15px'}}>There are no available meetings.</p>
			}
		</div>
	);
};

export default Tasks;