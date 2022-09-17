import "./App.css";
import "./app.scss";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
function App() {
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
              type="text"
              placeholder="Please write daily to do"
            ></input>
            <select className="Category" placeholder="Select to do type">
              <option value="Daily">Daily</option>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Workout">Workout</option>
            </select>
            <select className="Status" placeholder="Select to do type">
              <option value="Planed">Planed</option>
              <option value="Started">Started</option>
              <option value="Almost Done">Almost Done</option>
              <option value="Done">Done</option>
            </select>
            <button className="btn">Add To Do</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
