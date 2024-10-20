import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  forwardRef,
  SetStateAction,
  useState,
} from "react";
import { ITask } from "../App";

const AddTaskForm = forwardRef<
  HTMLInputElement,
  { setTasks: Dispatch<SetStateAction<ITask[]>> }
>(({ setTasks }, ref) => {
  const [newTaskName, setNewTaskName] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName) {
      setTasks((prev) => [
        ...prev,
        { name: newTaskName, status: "incomplete" },
      ]);
      setNewTaskName("");
    } else if (ref && typeof ref !== "function" && ref.current) {
      ref.current.focus();
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
          ref={ref}
        />
        <button type="submit">Add task</button>
      </form>
    </>
  );
});

export default AddTaskForm;
