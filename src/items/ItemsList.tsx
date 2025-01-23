import { observer } from "mobx-react-lite";
import taskStore from "../store/tasks.store";
import TaskItem from "./TaskItem";

const ItemsList = observer(() => {
  return (
    <ul className="m-auto w-5/6 p-4">
      {taskStore.tasks.map((task) => (
        <TaskItem key={task.id} task={task} level={1} />
      ))}
    </ul>
  );
});

export default ItemsList;
