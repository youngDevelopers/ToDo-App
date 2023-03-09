import Task from './Task'
const Tasks = ( {tasks, onDelete, onToogle} ) => {
    
    return (
        <div>
            {tasks.map( (task) => ( // using an arrow function
                <Task key={task.id} task={task}
                onDelete = {onDelete} onToogle = {onToogle} />
            ) )}
        </div>
    )
}

export default Tasks
