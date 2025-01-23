import SubTaskForm from "../ui/SubTaskForm";
import { Task } from "../types";
import TaskControl from "../ui/TaskControl";

const TaskItem = ({ task, level = 1 }: { task: Task; level: number }) => {
  const colors = ["bg-amber-300", "bg-amber-100"];
  const borderColors = ["border-amber-600", "border-amber-400"];

  const backgroundColor = colors[level % colors.length];
  const borderColor = borderColors[level % borderColors.length];

  return (
    <li key={task.id}>
      <div
        className={`mb-4 flex flex-col items-center justify-between gap-4 rounded-lg border-l-4 lg:flex-row ${borderColor} ${task.isCompleted ? "bg-gray-200" : backgroundColor} p-4`}
      >
        <TaskControl item={task} />
        <SubTaskForm className="text-amber-800" id={task.id} />
      </div>
      {task.subTask && (
        <ul className={`ml-auto w-[97%]`}>
          {task.subTask.map((subTask) => (
            <TaskItem key={subTask.id} task={subTask} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TaskItem;
