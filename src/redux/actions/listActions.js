export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const TASK_IS_COMPLETED = 'TASK_IS_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_ALL_COMPLETED_TASKS = 'DELETE_ALL_COMPLITED_TASKS';
export const EDITING_TASK = 'EDITING_TASK';
export const UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT';

export const addNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    payload: task
  };
};

export const taskIsCompleted = (id) => {
  return {
    type: TASK_IS_COMPLETED,
    payload: id
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const deleteAllTasks = () => {
  return {
    type: DELETE_ALL_COMPLETED_TASKS
  };
};

export const editingTask = (id) => {
  return {
    type: EDITING_TASK,
    payload: id
  };
};

export const updateTaskText = (id, newText) => {
  return {
    type: UPDATE_TASK_TEXT,
    payload: { id: id, text: newText }
  };
};
