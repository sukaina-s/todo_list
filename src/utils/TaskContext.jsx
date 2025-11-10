import { createContext, useContext, useReducer, useEffect } from "react";

export const TaskContext = createContext();
export const TaskDispatchContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};
export const useTaskDispatchContext = () => {
  return useContext(TaskDispatchContext);
};

export default function TaskContextProvider({ children }) {
  const initialValue = localStorage.getItem("tasks");
  const [tasks, dispatchTasks] = useReducer(
    taskReducer,
    initialValue ? JSON.parse(initialValue) : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks.length]);

  return (
    <TaskContext value={tasks}>
      <TaskDispatchContext value={dispatchTasks}>
        {children}
      </TaskDispatchContext>
    </TaskContext>
  );
}

const taskReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          name: action.task.name,
          done: false,
          id: state.length + 1,
        },
      ];
    }
    case "check": {
      return state.map((item) => {
        if (item.id === action.task.id) {
          return { ...action.task, done: true };
        }
        return item;
      });
    }
    case "uncheck": {
      return state.map((item) => {
        if (item.id === action.task.id) {
          return { ...action.task, done: false };
        }
        return item;
      });
    }
    case "delete": {
      return state.filter((item) => item.id !== action.task.id);
    }
    case "clear_completed": {
      return state.filter((item) => item.done === false);
    }
  }
};
