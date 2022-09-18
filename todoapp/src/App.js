import "./App.css";
import "./app.scss";
import { useState } from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import TodoTask from "./components/TodoTask.jsx";
function App() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [todoList, setTodoList] = useState([""]);

  const handleChange = (event) => {
    if (event.target.name === "task") {
    } else {
      setCategory(event.target.value);
    }
  };
  //Adding Task
  const addTask = () => {
    const newTask = { taskName: task, category: category, status: status };
    setTodoList([...todoList, newTask]); //Adding Task split into in todoList
    setTask("");
    setCategory("");
    setStatus("");
  };
  return (
    <div className="App">
      <div className="body">
        <div className="container">
          <h2>
            To Do List App <BsFillFileEarmarkTextFill />
          </h2>
          <div className="inputs">
            <input
              className="todo"
              value={task}
              placeholder="Please write daily to do"
              onChange={handleChange}
              name="task"
            ></input>
            <select
              className="Category"
              placeholder="Select to do type"
              onChange={handleChange}
              value={category}
              name="category"
            >
              <option value="Daily">Daily</option>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Workout">Workout</option>
            </select>
            <select
              className="Status"
              placeholder="Select to do type"
              value={status}
              name="status"
              onChange={handleChange}
            >
              <option value="Planed">Planed</option>
              <option value="Started">Started</option>
              <option value="Almost Done">Almost Done</option>
              <option value="Done">Done</option>
            </select>
            <button className="btn" onClick={addTask}>
              Add To Do
            </button>
          </div>
        </div>
        <div className="todoList">
          {todoList.map(() => {
            return <TodoTask />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
