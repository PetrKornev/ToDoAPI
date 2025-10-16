import { CHANGE_INPUT_VALUE } from '../actions/inputAction';

const initialValue = {
  userInput: ''
};

const inputReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, userInput: action.payload };

    default:
      return state;
  }
};

export default inputReducer;
