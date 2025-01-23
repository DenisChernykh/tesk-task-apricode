import taskStore from "../store/tasks.store";
import { Task } from "../types";
import Checkbox from "./Checkbox";

interface TaskControlProps {
  item: Task;
}

function TaskControl({ item }: TaskControlProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={item.id}
        onChange={() => taskStore.toggleComplete(item.id)}
        checked={item.isCompleted}
      />
      <span
        className={`${
          item.isCompleted ? "text-gray-500 line-through" : "text-black"
        }`}
      >
        {item.text}
      </span>
      <button onClick={() => taskStore.removeTask(item.id)} className="p-2">
        ❌
      </button>
    </div>
  );
}

export default TaskControl;
