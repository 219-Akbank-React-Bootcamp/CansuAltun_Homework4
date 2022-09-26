import React, { useState, FC, ChangeEvent, useEffect } from "react";
import "./app.scss";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>(""); //define state with type
  const [Id, setId] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>(getValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setCategory(String(event.target.value)); //Change type wrapping with Number + parentheses
    }
  };
  //Adding Task
  const addTask = (): void => {
    const newTask = { Id: Id, taskName: task, category: category };
    setTodoList([...todoList, newTask]); //Adding newTask split into in todoList
    setId(0);
    setTask("");
    setCategory("");
  };

  //Adding value to browser
  function getValues() {
    const storedValues = localStorage.getItem("todoList");
    if (!storedValues)
      return [
        {
          Id: "",
          task: "",
        },
      ];
    return JSON.parse(storedValues);
  }

  // Delete Task
  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  //Local Storage Add and Remove Items
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="App">
      <div className="container">
        <h1 className="header">TodoList App</h1>
        <input
          type="text"
          placeholder="Task"
          className="place"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <div>
          <input
            type="text"
            placeholder="Category"
            className="place"
            name="category"
            value={category}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};
export default App;
