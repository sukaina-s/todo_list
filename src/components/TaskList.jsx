import React from "react";
import TaskItem from "./TaskItem";
import { useTaskContext, useTaskDispatchContext } from "../utils/TaskContext";
import clearCompleted from "../assets/clear.svg";
import "../assets/css/TaskList.css";

function TaskList() {
  const tasks = useTaskContext();
  const dispatch = useTaskDispatchContext();
  return (
    <div className="task-list__container">
      <div className="task-list__wrapper">
        {tasks?.length ? (
          <div className="task-list">
            {tasks?.map((task) => <TaskItem task={task} key={task.id} />)}
          </div>
        ) : (
          <p>Nothing to do!</p>
        )}
        <div className="task-list__clear-section">
          <div className="task-list__clear">
            <span className="task-list__clear_logo">
              <img src={clearCompleted} />
            </span>
            <span
              className="task-list__clear_label"
              onClick={() => dispatch({ type: "clear_completed" })}
            >
              Clear Completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
