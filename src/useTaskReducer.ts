import { TaskType } from "./components/Task";

export type TaskAction =
  { type: 'ADD-TASK'; payload: TaskType; } |
  { type: 'TOGGLE-TASK'; payload: string; } |
  { type: 'DELETE-TASK'; payload: string; };

export function useTaskReducer(state: TaskType[], { type, payload }: TaskAction): TaskType[] {
  if (type === 'ADD-TASK') {
    return [payload, ...state];
  }
  if (type === 'TOGGLE-TASK') {
    return state.map(task => {
      const isChecked = task.id === payload ? !task.isChecked : task.isChecked
      return { ...task, isChecked };
    });
  }
  if (type === 'DELETE-TASK') {
    return state.filter(task => task.id !== payload);
  }
  return state;
}
