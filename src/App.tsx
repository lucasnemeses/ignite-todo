import { useState } from "react";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";

export default function App() {
  const [value, setValue] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <Input
        value={value}
        placeholder="Adicione uma nova tarefa"
        onChange={setValue}
      />
      <Checkbox
        value={isChecked}
        onChange={setIsChecked}
      />
    </div>
  );
}
