import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  // const tasksArray = ["Task 1", "Task 2"]
  console.log("Rendered app component")
  // const array = ["thing1","thing2"]
  // const [value1,value2] = array

  const [tasks,setTasks] = useState(["Task 1", "Task 2"])
  // console.log(state)

  const taskElements = tasks.map( task => <h2>{task}</h2>)
 
  function addTask(){
    const taskNew = `Task ${tasks.length + 1}`
    // tasks.push(taskNew)
    setTasks(prevTasks =>[...prevTasks, taskNew])
    // console.log(tasks)
  }

  return (
    <>
    {taskElements}
    <div className="App">
      <button onClick={addTask}>Add tasks</button>
    </div>
    </>
    
  );
}

export default App;
