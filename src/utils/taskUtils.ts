import { Task, Tasks } from "../types";

export const createTask = (text: string): Task => ({
	id: Date.now(),
	text,
	isCompleted: false,
	subTask: [],
});

export const createSubTask = (
	tasks: Tasks,
	id: number,
	text: string,
): Tasks => {
	const newSubTask = {
		id: Date.now(),
		text,
		isCompleted: false,
		subTask: [],
	};

	const addSub = (task: Task): Task => {
		if (task.id === id) {
			return {
				...task,
				isCompleted: false,
				subTask: [...task.subTask, newSubTask],
			};
		}
		return {
			...task,
			subTask: task.subTask.map(addSub),
		};
	};

	return tasks.map(addSub);
};

export const removeTask = (tasks: Tasks, id: number): Tasks => {
	const remove = (task: Task): Task | null => {
		if (task.id === id) {
			return null;
		}
		if (task.subTask) {
			return {
				...task,
				subTask: task.subTask
					.map(remove)
					.filter((subTask): subTask is Task => subTask !== null),
			};
		}
		return task;
	};

	return tasks
		.map(remove)
		.filter((task): task is Task => task !== null)
};

export const updateParentCompletion = (tasks: Tasks): Tasks => {
	const updateCompletion = (task: Task): Task => {
		if (task.subTask.length > 0) {
			const updatedSubTasks = task.subTask.map(updateCompletion);
			const allCompleted = updatedSubTasks.every((sub) => sub.isCompleted);
			return {
				...task,
				subTask: updatedSubTasks,
				isCompleted: allCompleted,
			};
		}
		return task;
	};

	return tasks.map(updateCompletion);
};

export const toggleTaskCompletion = (tasks: Tasks, id: number): Tasks => {
	const toggle = (task: Task): Task => {
		if (task.id === id) {
			const newState = !task.isCompleted;
			return {
				...task,
				isCompleted: newState,
				subTask: task.subTask.map((subTask) =>
					markAllSubtasks(subTask, newState),
				),
			};
		}
		return {
			...task,
			subTask: task.subTask.map(toggle),
		};
	};

	return tasks.map(toggle);
};

const markAllSubtasks = (task: Task, newState: boolean): Task => ({
	...task,
	isCompleted: newState,
	subTask: task.subTask.map((subTask) => markAllSubtasks(subTask, newState)),
});
