import { useState } from 'react'
import './App.css'
function App() {
  const [counter,setCounter] = useState(12)
// let counter =15
const addValue= () =>{
  // counter=counter + 1
  // console.log(counter);
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
  // setCounter(counter+1)
  // setCounter(counter+2)
  // setCounter(counter+1)
  
  
}
const remove=()=>{
  // counter=counter-1
  // console.log(counter);
  setCounter(counter-1)
}
  return (
    <>
      <h1>React course with me {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button
      onClick={remove}
      >Remove value</button>
      <p>footer:{counter}</p>
   
    </>
  )
}

export default App
