import { MouseEventHandler } from "react";
import { ITask } from "../App_TodoList";
import Button from "./Button";

const Card = ({
  task,
  clickHandler,
}: {
  task: ITask;
  clickHandler: MouseEventHandler;
}) => {
  return (
    <div className={`card ${task.status}`}>
      <p>{task.name}</p>
      {task.status === "incomplete" && (
        <Button text="Mark as completed" onClick={clickHandler} />
      )}
    </div>
  );
};

export default Card;
