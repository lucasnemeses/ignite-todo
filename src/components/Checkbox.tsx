import { ChangeEvent } from 'react';
import style from './Checkbox.module.css';

interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export function Checkbox({ value, onChange }: CheckboxProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange( event.target.checked);
  }

  return (
    <input
      className={style.checkbox}
      type="checkbox"
      checked={value}
      onChange={handleChange}
    />
  );
}
