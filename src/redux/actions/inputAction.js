export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInput = (input) => {
  return { type: CHANGE_INPUT_VALUE, payload: input };
};
