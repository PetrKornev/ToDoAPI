import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

const listSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    taskCompleted: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    deleteAllTasks: (state) => {
      state.tasks = state.tasks.filter((item) => !item.completed);
    },
    editingTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload);
      if (task) {
        task.isEditing = !task.isEditing;
      }
    },
    updateTaskText: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((item) => item.id === id);
      if (task) {
        task.text = newText;
      }
    }
  }
});

export const {
  addNewTask,
  taskCompleted,
  deleteTask,
  deleteAllTasks,
  editingTask,
  updateTaskText
} = listSlice.actions;
export default listSlice.reducer;
