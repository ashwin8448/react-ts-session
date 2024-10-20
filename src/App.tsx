import { useRef, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/form";
import TaskCards from "./components/cards";

export interface ITask {
  name: string;
  status: "completed" | "incomplete";
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <AddTaskForm setTasks={setTasks} ref={inputRef} />
      {tasks.length ? <TaskCards tasks={tasks} setTasks={setTasks} /> : null}
    </>
  );
}

export default App;
