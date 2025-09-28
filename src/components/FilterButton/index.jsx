const FilterButton = ({ setStatus }) => {
  const allTask = () => {
    setStatus('all');
  };

  const activeTask = () => {
    setStatus('active');
  };

  const completedTask = () => {
    setStatus('completed');
  };

  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={allTask}>
        Все
      </button>
      <button className="filter-btn" onClick={activeTask}>
        Активные
      </button>
      <button className="filter-btn" onClick={completedTask}>
        Готовые
      </button>
    </div>
  );
};

export default FilterButton;
