import  {FaTimes} from 'react-icons/fa'

const Task = ( {task, onDelete, onToogle} ) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = { () => 
        onToogle(task.id) }>
            <h3> 
                {task.text}{' '}
                <FaTimes 
                    style={{ color: 'red' ,
                    cursor: 'pointer'
                    }}
                    onClick = { () => onDelete(task.id)}//states, props gets passed down and actions gets passed up
                />
            </h3>
            <p> {task.day} </p>
        </div>
    )
}

export default Task
