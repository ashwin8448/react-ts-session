import {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { ITask } from "../App2";
import Button from "./Button";

const AddTaskForm = ({
  setTasks,
}: {
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}) => {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newTaskName) {
      setTasks((prev) => [
        ...prev,
        { name: newTaskName, status: "incomplete", taskID: prev.length + 1 },
      ]);
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
        <Button type="submit" text="Add task" />
      </form>
    </>
  );
};

export default AddTaskForm;

// ========================================================================
// addNewTask({
//   name: newTaskName,
//   status: "incomplete",
//   taskID: tasks.length + 1,
// });
// ========================================================================
// dispatch({
//   type: "add new task",
//   payload: {
//     name: newTaskName,
//     status: "incomplete",
//     taskID: tasks.length + 1,
//   },
// });
// ========================================================================
