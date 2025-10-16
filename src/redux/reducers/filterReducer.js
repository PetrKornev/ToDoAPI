import {
  FILTER_ACTIVE_TASKS,
  FILTER_ALL_TASKS,
  FILTER_COMPLETED_TASKS
} from '../actions/filterAction';

const initialValue = {
  currentFilter: 'all'
};

const filterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FILTER_ACTIVE_TASKS:
      return { ...state, currentFilter: action.payload };
    case FILTER_ALL_TASKS:
      return { ...state, currentFilter: action.payload };
    case FILTER_COMPLETED_TASKS:
      return { ...state, currentFilter: action.payload };

    default:
      return state;
  }
};

export default filterReducer;
