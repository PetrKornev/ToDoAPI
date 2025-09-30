const CounterAndTrashButton = ({ dataList, setDataList }) => {
  const filterActive = dataList.filter((item) => !item.isCompleted);

  const deleteAllCompletedTasks = async () => {
    const filterId = dataList
      .filter((item) => item.isCompleted)
      .map((item) => item.id);
    await Promise.all(
      filterId.map((id) =>
        fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
          method: 'DELETE',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      )
    );

    setDataList((prev) => prev.filter((item) => !item.isCompleted));
  };

  return (
    <div className="counter-trash-container">
      <span>Осталось дел:{filterActive.length}</span>
      <button className="filter-btn" onClick={() => deleteAllCompletedTasks()}>
        Очистить выполненные
      </button>
    </div>
  );
};

export default CounterAndTrashButton;
