import "./TodoItem.css";
import { DeleteFilled } from "@ant-design/icons";

function TodoItem(props) {
  return (
    <div className="item">
      <span
        className={`taskName ${props.task.isCompleted ? "completed" : ""}`}
        onClick={() => props.toggleCompleted(props.task.name)}
      >
        {props.task.name}
      </span>
      <DeleteFilled
        className={"btnDelete"}
        onClick={() => props.deleteTask(props.task.name)}
      />
    </div>
  );
}

export default TodoItem;
