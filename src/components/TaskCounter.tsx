import style from './TaskCounter.module.css';

interface TaskCounterProps {
  countTasks: number;
  countTasksCompleted: number;
}

export function TaskCounter({ countTasks, countTasksCompleted }: TaskCounterProps) {
  return (
    <div className={style.taskCounter}>
      <div>
        <span className={style.taskCounterLabelBlue}>
          Tarefas cridas
        </span>
        <span className={style.taskCounterValue}>
          {countTasks}
        </span>
      </div>

      <div>
        <span className={style.taskCounterLabelPurple}>
          Concluídas
        </span>
        <span className={style.taskCounterValue}>
          {countTasksCompleted} de {countTasks}
        </span>
      </div>
    </div>
  )
}
