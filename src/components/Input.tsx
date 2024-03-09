import { ChangeEvent } from 'react';
import style from './Input.module.css';

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function Input({ value, placeholder, onChange }: InputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange( event.target.value);
  }

  return (
    <input
      className={style.input}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
