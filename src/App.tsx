import Header from "./ui/Header";
import Input from "./ui/Input";
import ItemsList from "./items/ItemsList";
import Button from "./ui/Button";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import taskStore from "./store/tasks.store";

const App = observer(() => {
  const [taskText, setTaskText] = useState<string>("");
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!taskText.trim()) return;
    taskStore.addTask(taskText);
    setTaskText("");
  }
  return (
    <div className="flex min-h-screen flex-col font-mono">
      <Header>
        <form
          className="flex flex-col gap-4 lg:flex-row"
          onSubmit={handleAddTask}
        >
          <Input
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Добавьте задачу"
            value={taskText}
            className="bg-amber-100 text-amber-800"
          />
          <Button type="submit" text="Добавить" />
        </form>
      </Header>
      <main className="grow bg-amber-900">
        <ItemsList />
      </main>
    </div>
  );
});

export default App;
