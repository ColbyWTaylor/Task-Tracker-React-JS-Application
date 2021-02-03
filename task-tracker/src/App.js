import { useState } from "react";
import { FaTeamspeak } from "react-icons/fa";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "lots of hugs", day: "February 14", reminder: false },
    { id: 2, text: "run around", day: "March 15", reminder: true },
    { id: 3, text: "sleep in", day: "April 21", reminder: true },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
