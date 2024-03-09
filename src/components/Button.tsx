import { ElementType } from 'react';
import style from './Button.module.css';

interface ButtonProps {
  icon: ElementType;
  label?: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  const styleClassName = props?.label ? style.button : style.buttonSmall;

  return (
    <button
      className={styleClassName}
      onClick={props.onClick}
    >
      {props?.label}
      <props.icon size={16} />
    </button>
  );
}
