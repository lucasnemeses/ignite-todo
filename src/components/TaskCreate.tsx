import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './Input';
import { Button } from './Button';
import { CheckCircle } from 'phosphor-react';
import { TaskType } from './Task';
import style from './TaskCreate.module.css';

interface TaskCreateProps {
  onCreateTask: (task: TaskType) => void;
}

export function TaskCreate({ onCreateTask }: TaskCreateProps) {
  const [newTaskContent, setNewTaskContent] = useState<string>('');

  function handleClickCreateTask() {
    if (!newTaskContent) return;

    onCreateTask({
      id: uuidv4(),
      content: newTaskContent,
      completed: false,
    });

    setNewTaskContent('');
  }

  return (
    <div className={style.taskCreate}>
      <Input
        value={newTaskContent}
        placeholder="Adicione uma nova tarefa"
        onChange={setNewTaskContent}
      />
      <Button
        icon={CheckCircle}
        label="Criar"
        onClick={handleClickCreateTask}
      />
    </div>
  );
}
