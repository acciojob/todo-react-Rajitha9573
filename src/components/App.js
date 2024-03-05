
import React from "react";
import './../styles/App.css';
import {useState} from "react";
// import Todo  from "./components/Todo";


const App = () => {

const [value, setValue] = useState("");
const [todo, setTodo] = useState([]);



function Displayvalue(e){
  e.preventDefault();

  
  setTodo([...todo, value]);
  setValue("")

  console.log(todo)

}

const handleDelete = (index)=>{

  const updatedValue = todo.filter((something, i)=> i!== index);
  setTodo(updatedValue);

}


  return (
    <div>
      
      
    <h1>To-Do List</h1>
        
    <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} />
    <button onClick={Displayvalue}>Add Todo</button>
    
   
    {/* <h1>{todo}</h1> */}
    {
      todo.length>=0 && todo.map((data, index) => (
        <ul className="listItems">
          <li key={index}>{data}</li>
          <button onClick={()=> handleDelete(index)}>delete</button>
        </ul>
      ))
    }
                
            
            
            
    </div>
  )
}

export default App
