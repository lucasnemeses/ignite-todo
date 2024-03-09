import { useReducer } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import initialTasks from "./tasks.json";
import { useTaskReducer } from "./useTaskReducer";

export default function App() {
  const [tasks, taskDispatch] = useReducer(useTaskReducer, initialTasks);

  function handleCheckTask(id: string) {
    taskDispatch({ type: 'TOGGLE-TASK', payload: id });
  }

  function handleDeleteTask(id: string) {
    taskDispatch({ type: 'DELETE-TASK', payload: id });
  }

  return (
    <div>
      <Header />

      <TaskList
        tasks={tasks}
        onCheckTask={handleCheckTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
