import { useEffect, useState } from "react";
import "../App.css";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoItem from "../components/TodoItem/TodoItem";

function Todo() {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("listTask"));
    if (list) {
      setListTask(list);
    }
  }, []);

  const handleAdd = (textInput) => {
    const task = {
      name: textInput,
      isCompleted: false,
    };
    const newListTask = [...listTask, task];

    localStorage.setItem("listTask", JSON.stringify(newListTask));

    setListTask(newListTask);
  };

  const handleDelete = (taskName) => {
    const newListTask = [...listTask];

    newListTask.splice(
      newListTask.findIndex((task) => task.name === taskName),
      1
    );
    localStorage.setItem("listTask", JSON.stringify(newListTask));

    setListTask(newListTask);
  };

  const toggleCompleted = (taskName) => {
    const newListTask = [...listTask];
    const id = newListTask.findIndex((task) => task.name === taskName);

    newListTask[id].isCompleted = !newListTask[id].isCompleted;
    localStorage.setItem("listTask", JSON.stringify(newListTask));

    console.log(newListTask[id].isCompleted);

    setListTask(newListTask);
  };

  return (
    <div className="todoApp">
      <TodoInput addTask={handleAdd} />
      {listTask.map((task, index) => {
        return (
          <TodoItem
            key={index}
            task={task}
            deleteTask={handleDelete}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
}

export default Todo;
