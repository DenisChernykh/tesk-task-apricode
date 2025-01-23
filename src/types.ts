export type Task = {
  id: number;
  text: string;
  isCompleted: boolean;
  subTask: Task[];
  isVisible?: boolean;
};

export type Tasks = Task[];
