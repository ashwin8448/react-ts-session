import { Dispatch, SetStateAction } from "react";
import { ITask } from "../App_TodoList";
import CardsContainer from "./CardsContainer";
import Card from "./Card";

const TaskCards = ({
  tasks,
  setTasks,
}: {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}): JSX.Element | null => {
  const clickHandler = (task: ITask) => {
    tasks[task.taskID - 1].status = "completed";
    setTasks([...tasks]);
  };
  return tasks.length ? (
    <>
      <h2>Saved Tasks</h2>
      <CardsContainer>
        {tasks.map((task) => (
          <Card
            key={task.taskID}
            task={task}
            clickHandler={() => clickHandler(task)}
          />
        ))}
      </CardsContainer>
    </>
  ) : null;
};

export default TaskCards;

// updateTask(task.taskID);
// dispatch({ type: "update task", payload: task.taskID });
