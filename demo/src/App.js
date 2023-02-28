import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  const [inputData,setInputData] = 
        useState({"firstName":"","lastName":""})

  function handleChange(event){
    console.log(event.target.value)
    console.log(event.target.name)
    const {name,value} = event.target
    setInputData(prevData => ({...prevData, [name]:value}))
    console.log(inputData)
  }

  function submitHandler(event){
    event.preventDefault()
   // create a new contact
   console.log("submit clicked")
    
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <input 
            name='firstName'
            placeholder='First Name'
            onChange={handleChange}
            value={inputData.firstName}
          />
          <input 
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
            value={inputData.lastName}
          />
          <br/>
          <button>Submit</button>
      </form>
    </>
    
  );
}

export default App;
