export const FILTER_ACTIVE_TASKS = 'FILTER_ACTIVE';
export const FILTER_ALL_TASKS = 'FILTER_ALL';
export const FILTER_COMPLETED_TASKS = 'FILTER_CMPLETED_TASKS';

export const statusAll = () => {
  return {
    type: FILTER_ALL_TASKS,
    payload: 'all'
  };
};

export const statusActive = () => {
  return {
    type: FILTER_ACTIVE_TASKS,
    payload: 'active'
  };
};

export const statusCompleted = () => {
  return {
    type: FILTER_COMPLETED_TASKS,
    payload: 'completed'
  };
};
