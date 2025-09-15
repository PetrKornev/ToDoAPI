import { useState } from 'react';

const Input = ({ token, setDataList }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = async () => {
    if (!token || !input.trim()) return;

    try {
      const response = await fetch(
        'https://todo-redev.herokuapp.com/api/todos',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: `${input}`,
          }),
        }
      );
      const data = await response.json();
      setDataList((prev) => [...prev, data]);
      setInput('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="input-container">
      <input
        className="todo-input"
        name="task"
        placeholder="Введите задачу"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={input}
      />
      <button className="todo-button" onClick={handleClick}>
        Добавить
      </button>
      <p className="error-text">Нельзя добавить пустую задачу</p>
    </div>
  );
};

export default Input;
