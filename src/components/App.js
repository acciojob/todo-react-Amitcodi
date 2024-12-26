
import React from "react";
import './../styles/App.css';

const App = () => {
   let [todo, setTodo] = useState("");
    let [todolist, setTodoList] = useState([]);
  
    function submitHandler() {
      setTodoList([...todolist,todo]);
      setTodo("");
    }
  return (
    <div>
      <h1>Todo-List App</h1>
      <input
        type="text"
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={submitHandler}>Add Todo</button>
      {
        todolist.map((item, index) => (
          <div key={index}>
            {item}
            <button onClick={() => setTodoList(todolist.filter((_, i) => i!== index))}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
