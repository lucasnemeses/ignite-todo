import { useReducer } from "react";
import { TaskType } from "./components/Task";

interface TaskState {
  tasks: TaskType[];
  countTasksCompleted: number;
}

type TaskAction =
  { type: 'ADD-TASK'; payload: TaskType; } |
  { type: 'CHECK-TASK'; payload: string; } |
  { type: 'DELETE-TASK'; payload: string; };

interface UseTaskReducerReturn extends TaskState {
  addTask: (id: TaskType) => void;
  checkTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

function reducer(state: TaskState, { type, payload }: TaskAction): TaskState {
  if (type === 'ADD-TASK') {
    return {
      ...state,
      tasks: [payload, ...state.tasks]
    };
  }
  if (type === 'CHECK-TASK') {
    const updatedTasks = state.tasks.map(task => {
      const completed = task.id === payload ? !task.completed : task.completed
      return { ...task, completed };
    });
    const completedTasks = updatedTasks.filter(task => task.completed);
    const remainingTasks = updatedTasks.filter(task => !task.completed);
    return {
      tasks: [...remainingTasks, ...completedTasks],
      countTasksCompleted: completedTasks.length,
    };
  }
  if (type === 'DELETE-TASK') {
    const tasks = state.tasks.filter(task => task.id !== payload);
    const countTasksCompleted = tasks.filter(task => task.completed).length;
    return {
      tasks,
      countTasksCompleted,
    };
  }
  return state;
}

export function useTaskReducer():  UseTaskReducerReturn {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    countTasksCompleted: 0,
  });

  function addTask(task: TaskType) {
    dispatch({ type: 'ADD-TASK', payload: task });
  }

  function checkTask(id: string) {
    dispatch({ type: 'CHECK-TASK', payload: id });
  }

  function deleteTask(id: string) {
    dispatch({ type: 'DELETE-TASK', payload: id });
  }

  return {
    ...state,
    addTask,
    checkTask,
    deleteTask,
  }
}
