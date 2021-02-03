import { useState } from "react";
import { FaTeamspeak } from "react-icons/fa";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "lots of hugs", day: "February 14", reminder: false },
    { id: 2, text: "run around", day: "March 15", reminder: false },
    { id: 3, text: "sleep in", day: "April 21", reminder: true },
  ]);

  console.log(tasks.length);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
