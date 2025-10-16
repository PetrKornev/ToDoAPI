import { legacy_createStore as createStore, combineReducers } from 'redux';
import listReducer from './reducers/listReducer';
import inputReducer from './reducers/inputReducer';
import filterReducer from './reducers/filterReducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const rootReducer = combineReducers({
  list: listReducer,
  input: inputReducer,
  filter: filterReducer
});

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveState(store.getState()));

export default store;
