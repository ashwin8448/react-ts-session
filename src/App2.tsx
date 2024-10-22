import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/Form";
import TaskCards from "./components/SavedTasks";
// import { TaskContextProvider } from "./TaskContext";

export interface ITask {
  name: string;
  taskID: number;
  status: "completed" | "incomplete";
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <AddTaskForm setTasks={setTasks} />
      <TaskCards tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
