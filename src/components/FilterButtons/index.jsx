import { useDispatch } from 'react-redux';
import {
  statusAll,
  statusActive,
  statusCompleted
} from '../../redux/actions/filterAction';

const FilterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={() => dispatch(statusActive())}>
        Активные
      </button>
      <button className="filter-btn" onClick={() => dispatch(statusAll())}>
        Все
      </button>
      <button
        className="filter-btn"
        onClick={() => dispatch(statusCompleted())}
      >
        Выполненные
      </button>
    </div>
  );
};

export default FilterButtons;
