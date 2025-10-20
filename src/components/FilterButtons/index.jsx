import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

const FilterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter-container">
      <button
        className="filter-btn"
        onClick={() => dispatch(setFilter('active'))}
      >
        Активные
      </button>
      <button className="filter-btn" onClick={() => dispatch(setFilter('all'))}>
        Все
      </button>
      <button
        className="filter-btn"
        onClick={() => dispatch(setFilter('completed'))}
      >
        Выполненные
      </button>
    </div>
  );
};

export default FilterButtons;
