import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import taskStore from "../store/tasks.store";

type SubTaskFormProps = {
  id: number;
  className?: string;
};

function SubTaskForm({ id, className }: SubTaskFormProps) {
  const [text, setText] = useState<string>("");
  function handleAddSubTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!text.trim()) return;
    taskStore.addSubTask(id, text);
    setText("");
  }

  return (
    <form
      onSubmit={handleAddSubTask}
      className="flex flex-col items-center justify-end gap-4 group-last:mb-0 lg:flex-row"
    >
      <Input
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавьте подзадачу"
        className={`border-2 ${className} w-full min-w-[100px] max-w-[240px]`}
        value={text}
      />
      <Button type="submit" text="Добавить" />
    </form>
  );
}

export default SubTaskForm;
