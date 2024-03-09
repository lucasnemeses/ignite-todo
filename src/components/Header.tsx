import { IgniteToDoLogo } from '../assets/IgniteToDoLogo';
import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <IgniteToDoLogo />
    </header>
  )
}
