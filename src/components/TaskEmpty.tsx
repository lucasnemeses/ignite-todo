import { ClipboardIcon } from '../assets/Clipboard';
import style from './TaskEmpty.module.css';

export function TaskEmpty() {
  return (
    <div className={style.taskEmpty}>
      <ClipboardIcon />
      <div>
        <p className={style.bold}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
