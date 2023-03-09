import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([//passing tasks data /state at app component level so that we may use this on other components in the component tree
      {
          id:1,
          text: 'Doctors Appointment',
          day : 'Feb 5th at 2.30pm',
          reminder : true, 
      },
      {
          id: 2,
          text : 'Meeting at School',
          day : 'Feb 6th at 1.30pm',
          reminder : true,
      },
      {
          id: 3,
          text : 'Food Shopping',
          day : 'Feb 5th at 2.30pm',
          reminder : false,
      },
      {
        id: 4,
        text : 'Betting',
        day : 'March 10 5pm',
        reminder : true,
    }
  ])

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task}//add whatever task is passed as argument on addTask 
    setTasks([...tasks, newTask])//firsly add the tasks that already exists by using the spread operator and add the newTask
  }

  //delete task
  const deleteTask = (id) => {//this function is passed as props to the component hence access to the state
    setTasks(tasks.filter( (task) => task.id !== id ))//filter tasks- with id not equal to task with id clicked 
  }
    
  //toogle Reminder-
  const toogleReminder = (id) => {
    setTasks(tasks.map( (task) =>
      task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask( !showAddTask ) } showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ?  <Tasks tasks={tasks} onDelete ={deleteTask} onToogle = {toogleReminder} />  : 'No Tasks to show' }
    </div>
  );
}

export default App;
