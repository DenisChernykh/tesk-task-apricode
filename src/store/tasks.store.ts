import { Tasks } from "../types";
import { makeAutoObservable } from "mobx";
import {
  createSubTask,
  createTask,
  removeTask,
  toggleTaskCompletion,
  updateParentCompletion,
} from "../utils/taskUtils";

class TaskStore {
  tasks: Tasks = [
    { id: 1, text: "Сделать тестовое задание", isCompleted: true, subTask: [] },
    { id: 3, text: "Получить работу ", isCompleted: false, subTask: [] },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  addTask(taskText: string) {
    this.tasks.push(createTask(taskText));
  }
  addSubTask(id: number, subTaskText: string) {
    this.tasks = createSubTask(this.tasks, id, subTaskText);
  }
  removeTask(id: number) {
    this.tasks = removeTask(this.tasks, id);
  }
  toggleComplete(id: number) {
    this.tasks = toggleTaskCompletion(this.tasks, id);
    this.updateParentCompletion();
  }
  updateParentCompletion() {
    this.tasks = updateParentCompletion(this.tasks);
  }
}

const taskStore = new TaskStore();
export default taskStore;
