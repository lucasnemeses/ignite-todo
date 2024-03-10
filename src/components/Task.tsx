import { useMemo } from 'react';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Trash } from 'phosphor-react';
import style from './Task.module.css';

export interface TaskType {
  id: string;
  completed: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  const styleTask = useMemo(() =>
    `${style.task} ${task.completed ? style.taskCompleted : ''}`,
    [task]
  );

  function handleCheckTask() {
    onCheckTask(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styleTask}>
      <Checkbox
        value={task.completed}
        onChange={handleCheckTask}
      />

      <p>{task.content}</p>

      <Button
        icon={Trash}
        onClick={handleDeleteTask}
      />
    </div>
  );
}
