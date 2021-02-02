import { FaTimes } from "react-icons/fa";

function Task({ task }) {
  return (
    <div className="task">
      <h2>
        {task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h2>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
