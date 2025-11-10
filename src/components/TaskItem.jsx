import { useTaskDispatchContext } from "../utils/TaskContext";
import taskDone from "../assets/task_done.svg";
import taskUndone from "../assets/task_undone.svg";
import deleteIcon from "../assets/delete.svg";
import "../assets/css/TaskItem.css";

export default function TaskItem({ task }) {
  const dispatch = useTaskDispatchContext();
  return (
    <div className="task-item__container">
      <div className="task-item__item">
        <label className="task-item__checkbox">
          <input
            name="checkbox"
            type="checkbox"
            checked={task.done}
            className="task-item__hidden__checkbox"
            readOnly
          />
          <span
            className="task-item__custom__checkbox"
            onClick={() =>
              dispatch({ type: task.done ? "uncheck" : "check", task })
            }
          >
            {task.done ? <img src={taskDone} /> : <img src={taskUndone} />}
          </span>
          <span className="task-item__name">{task.name}</span>
        </label>
      </div>
      <div
        className="task-item__delete"
        onClick={() => {
          dispatch({type: "delete", task})
        }}
      >
        <img src={deleteIcon} />
      </div>
    </div>
  );
}
