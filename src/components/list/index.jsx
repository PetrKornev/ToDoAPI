import Tasks from '../Tasks';

const List = ({ dataList, token, setDataList, status }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}`,
        {
          method: 'DELETE',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.json();
      setDataList((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCompleted = async (id) => {
    const response = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
      {
        method: 'PATCH',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    const data = await response.json();
    setDataList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const filterTask = dataList.filter((item) => {
    if (status === 'active') return !item.isCompleted;
    if (status === 'completed') return item.isCompleted;
    return true;
  });

  return token ? (
    <ul className="todo-list">
      {filterTask.map((item) => (
        <Tasks
          key={item.id}
          item={item}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
          setDataList={setDataList}
          token={token}
        />
      ))}
    </ul>
  ) : (
    <div className="loading">Загрузка</div>
  );
};

export default List;
