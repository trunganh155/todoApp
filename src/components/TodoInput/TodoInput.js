import { useState } from "react";
import "./TodoInput.css";

function TodoInput({ addTask }) {
  const [textInput, setTextInput] = useState("");
  const [check, setCheck] = useState(true);

  const handleAdd = () => {
    if (textInput === "") {
      setCheck(false);
      return;
    } else {
      setCheck(true);
      addTask(textInput);
      setTextInput("");
    }
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleAdd();
    }
  };

  return (
    <div className="heading">
      <input
        autoFocus
        className="inputTodo"
        type="text"
        placeholder="add your new task"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        onKeyPress={handleKeypress}
      />
      <button className="btnAdd" onClick={handleAdd}>
        add
      </button>
      <div>
        <span className={`validateInput ${check ? "" : "show"}`}>
          Please enter task name
        </span>
      </div>
    </div>
  );
}

export default TodoInput;
