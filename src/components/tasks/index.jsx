import { useState } from 'react';

const Tasks = ({ handleCompleted, handleDelete, setDataList, item, token }) => {
  const [editTask, setEditTask] = useState(item.title);
  const [showInput, setShowInput] = useState(false);

  const edit = (e) => {
    setEditTask(e.target.value);
  };

  const keyDownOnEdit = (e) => {
    if (e.key === 'Enter') {
      handleChangeTask(item.id);
    }
  };

  const handleChangeTask = async (id) => {
    const response = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: 'PATCH',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: editTask }),
      }
    );
    const data = await response.json();
    setDataList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: editTask } : item))
    );
    setShowInput(false);
  };

  return (
    <li className="todo-item">
      <label className={`task-label ${item.isCompleted ? 'completed' : ''}`}>
        <input
          type="checkbox"
          onChange={() => handleCompleted(item.id)}
          checked={item.isCompleted}
        />
        {showInput ? (
          <input
            className="task-edit-input"
            value={editTask}
            onChange={edit}
            onKeyDown={keyDownOnEdit}
          />
        ) : (
          <span>{item.title}</span>
        )}
      </label>

      <div className="task-actions">
        <button className="edit-btn" onClick={() => setShowInput(!showInput)}>
          Изменить
        </button>
        <button className="delete-btn" onClick={() => handleDelete(item.id)}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default Tasks;
