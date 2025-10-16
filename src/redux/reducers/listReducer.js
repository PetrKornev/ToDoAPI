import {
  ADD_NEW_TASK,
  DELETE_TASK,
  TASK_IS_COMPLETED,
  DELETE_ALL_COMPLETED_TASKS,
  EDITING_TASK,
  UPDATE_TASK_TEXT
} from '../actions/listActions';

const initialState = { tasks: [] };

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TASK_IS_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    case DELETE_ALL_COMPLETED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed)
      };
    case EDITING_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isEditing: !task.isEditing }
            : task
        )
      };
    case UPDATE_TASK_TEXT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        )
      };
    default:
      return state;
  }
};

export default listReducer;
