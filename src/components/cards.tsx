import { Dispatch, SetStateAction } from "react";
import { ITask } from "../App";

const TaskCards = ({
  tasks,
  setTasks,
}: {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}) => {
  return (
    <>
      <h2>Saved Tasks</h2>
      <div className="cards-container">
        {tasks.map((task, index) => (
          <div key={index} className={`card ${task.status}`}>
            <p>{task.name}</p>
            <button
              onClick={() => {
                tasks[index].status = "completed";
                console.log(tasks);
                setTasks([...tasks]);
              }}
            >
              Mark as completed
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskCards;
