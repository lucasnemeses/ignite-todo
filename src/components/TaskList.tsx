import { Task, TaskType } from "./Task";
import style from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskType[];
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onCheckTask, onDeleteTask }: TaskListProps) {
  return (
    <div className={style.taskList}>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onCheckTask={onCheckTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
