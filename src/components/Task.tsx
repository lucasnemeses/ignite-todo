import { Trash } from 'phosphor-react';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import style from './Task.module.css';
import { useMemo } from 'react';

export interface TaskType {
  id: string;
  isChecked: boolean;
  content: string;
}

interface TaskProps {
  task: TaskType;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  const styleTask = useMemo(() =>
    `${style.task} ${task.isChecked ? style.taskIsChecked : ''}`,
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
        value={task.isChecked}
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
