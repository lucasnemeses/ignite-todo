import { IgniteTodoLogo } from '../assets/IgniteTodoLogo';
import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <IgniteTodoLogo />
    </header>
  )
}
