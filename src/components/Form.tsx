import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { ITask } from "../App2";
import { useTaskContext } from "../context/TaskContext";

const AddTaskForm = ({
  setTasks,
}: {
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}) => {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addNewTask, tasks } = useTaskContext();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName) {
      addNewTask({
        name: newTaskName,
        status: "incomplete",
        taskID: tasks.length + 1,
      });
      // setTasks((prev) => [
      //   ...prev,
      //   { name: newTaskName, status: "incomplete", taskID: prev.length + 1 },
      // ]);
      setNewTaskName("");
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h2>Add new task</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="taskName">Task name:</label>
        <input
          id="taskName"
          type="text"
          onChange={changeHandler}
          value={newTaskName}
          ref={inputRef}
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
};

export default AddTaskForm;
