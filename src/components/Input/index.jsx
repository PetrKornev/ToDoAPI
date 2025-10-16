import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../../redux/actions/inputAction';
import { addNewTask } from '../../redux/actions/listActions';

const Input = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.userInput);

  const handleChange = (e) => {
    dispatch(changeInput(e.target.value));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') return handleAddTask();
  };

  const handleAddTask = () => {
    if (!inputValue.trim()) return;
    dispatch(
      addNewTask({
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
        isEditing: false
      })
    );
    dispatch(changeInput(''));
  };

  return (
    <div className="input-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Введите задачу"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="todo-button" onClick={handleAddTask}>
        Добавить
      </button>
    </div>
  );
};

export default Input;
