import { createContext, ReactNode, useContext, useState } from "react";
import { ITask } from "./App_TodoList";

interface ITaskContext {
  tasks: ITask[];
  addNewTask: (newTask: ITask) => void;
  updateTask: (taskID: ITask["taskID"]) => void;
}

const TaskContext = createContext<ITaskContext | null>(null);

export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const addNewTask = (newTask: ITask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskID: number) => {
    tasks[taskID - 1].status = "completed";
    setTasks([...tasks]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addNewTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const contextValues = useContext(TaskContext);
  if (contextValues) {
    return contextValues;
  } else {
    throw new Error("Cannot use useThemeContext outside ThemeContext provider");
  }
};
