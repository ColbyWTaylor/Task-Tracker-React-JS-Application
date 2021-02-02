import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "lots of hugs", day: "February 14", reminder: true },
    { id: 2, text: "run around", day: "March 15", reminder: true },
    { id: 3, text: "sleep in", day: "April 21", reminder: true },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
