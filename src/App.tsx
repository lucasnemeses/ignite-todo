import { useState } from "react";
import { Input } from "./components/Input";

export default function App() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Input
        value={value}
        placeholder="Adicione uma nova tarefa"
        onChange={setValue}
      />
    </>
  );
}
