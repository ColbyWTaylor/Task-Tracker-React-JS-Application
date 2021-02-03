import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  const clickDelete = () => {
    console.log("delete me clicked");
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h2>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h2>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
