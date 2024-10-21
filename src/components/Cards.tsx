import { Dispatch, SetStateAction } from "react";
import { ITask } from "../App2";
import { useTaskContext } from "../context/TaskContext";

const TaskCards = ({
  tasks,
  setTasks,
}: {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}): JSX.Element | null => {
  const { tasks: task, updateTask } = useTaskContext();
  tasks = task;
  return tasks.length ? (
    <>
      <h2>Saved Tasks</h2>
      <div className="cards-container">
        {tasks.map((task) => (
          <div key={task.taskID} className={`card ${task.status}`}>
            <p>{task.name}</p>
            {task.status === "incomplete" && (
              <button
                onClick={() => {
                  updateTask(task.taskID);
                  // tasks[task.taskID - 1].status = "completed";
                  // setTasks([...tasks]);
                }}
              >
                Mark as completed
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  ) : null;
};

export default TaskCards;
