const CounterAndTrashButton = ({ dataList, setDataList, token }) => {
  const filterActive = dataList.filter((item) => !item.isCompleted);

  const deleteAllCompletedTasks = async () => {
    const filterId = dataList
      .filter((item) => item.isCompleted)
      .map((item) => item.id);
    await Promise.all(
      filterId.map((id) =>
        fetch(
          fetch(`https://todo-redev.herokuapp.com/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
        )
      )
    );

    setDataList((prev) => prev.filter((item) => !item.isCompleted));
  };

  return (
    <div>
      Осталось дел:{filterActive.length}{' '}
      <button onClick={() => deleteAllCompletedTasks()}>
        Очистить выполненные
      </button>
    </div>
  );
};

export default CounterAndTrashButton;
