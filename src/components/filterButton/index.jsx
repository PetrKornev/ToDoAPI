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
    <>
      <button onClick={allTask}>Все</button>
      <button onClick={activeTask}>Активные</button>
      <button onClick={completedTask}>Готовые</button>
    </>
  );
};

export default FilterButton;
