import { useReducer } from "react";
import { Task, TaskType } from "./components/Task";

const initialTasks: TaskType[] = [
  {
    id: 'd',
    isChecked: false,
    content: 'content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."'
  },
  {
    id: 'dd',
    isChecked: false,
    content: 'content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."'
  },
  {
    id: 'ds',
    isChecked: true,
    content: 'content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."'
  },
];

type TaskAction =
  { type: 'ADD-TASK'; payload: TaskType; } |
  { type: 'TOGGLE-TASK'; payload: string; } |
  { type: 'DELETE-TASK'; payload: string; }

function taskReducer(state: TaskType[], { type, payload }: TaskAction): TaskType[] {
  if (type === 'ADD-TASK') {
    return [payload, ...state];
  }
  if (type === 'TOGGLE-TASK') {
    return state.map(task => {
      const isChecked = task.id === payload ? !task.isChecked : task.isChecked
      return { ...task, isChecked };
    });
  }
  if (type === 'DELETE-TASK') {
    return state.filter(task => task.id !== payload);
  }
  return state;
}

export default function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, initialTasks);

  function handleCheckTask(id: string) {
    taskDispatch({ type: 'TOGGLE-TASK', payload: id });
  }

  function handleDeleteTask(id: string) {
    taskDispatch({ type: 'DELETE-TASK', payload: id });
  }

  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onCheckTask={handleCheckTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
