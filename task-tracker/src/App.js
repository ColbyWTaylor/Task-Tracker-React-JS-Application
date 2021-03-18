import { useState } from "react";
import { FaTeamspeak } from "react-icons/fa";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Workout", day: "April 1", reminder: false },
    { id: 2, text: "Refactor react projects", day: "April 2", reminder: false },
    { id: 3, text: "Skydiving", day: "April 21", reminder: true },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}

      <p>Left green line indicates reminder- Double click left side to set change.</p>
    </div>
  );
}

export default App;
