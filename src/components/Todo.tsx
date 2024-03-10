import { useTaskReducer } from "../useTaskReducer";
import { TaskCounter } from "./TaskCounter";
import { TaskCreate } from "./TaskCreate";
import { TaskList } from "./TaskList";
import style from './Todo.module.css';

export function Todo() {
  const { tasks, countTasksCompleted, addTask, checkTask, deleteTask } = useTaskReducer();

  return (
    <div className={style.todoContainer}>
      <TaskCreate onCreateTask={addTask} />

      <div className={style.todoContent}>
        <TaskCounter
          countTasks={tasks.length}
          countTasksCompleted={countTasksCompleted}
        />

        <TaskList
          tasks={tasks}
          onCheckTask={checkTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
