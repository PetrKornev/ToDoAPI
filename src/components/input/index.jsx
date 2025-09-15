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
    <>
      <input
        name="task"
        placeholder="Введите задачу"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKey}
        value={input}
      />
      <button onClick={handleClick}>Добавить</button>
      <p>Нельзя добавить пустую задачу</p>
    </>
  );
};

export default Input;
