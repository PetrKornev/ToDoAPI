import { useDispatch, useSelector } from 'react-redux';
import { deleteAllTasks } from '../../redux/actions/listActions';

const CounterAndTrashButton = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.list);

  const handleDeleteAllCompleted = () => {
    dispatch(deleteAllTasks());
  };

  const restOfTheTasks = tasks.filter((item) => !item.completed).length;

  return (
    <div className="counter-trash-container">
      Осталось задач: {restOfTheTasks}
      <button className="filter-btn" onClick={() => handleDeleteAllCompleted()}>
        Очистить выполненные
      </button>
    </div>
  );
};

export default CounterAndTrashButton;
