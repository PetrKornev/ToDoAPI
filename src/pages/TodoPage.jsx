import { useState, useEffect } from 'react';
import Header from '../components/header';
import Input from '../components/input';
import List from '../components/list';
import FilterButton from '../components/filterButton';
import CounterAndTrashButton from '../components/counterAndTrashButton';
import Logout from '../components/Logout';

const TodoPage = () => {
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState('all');

  const sendGetRequest = async () => {
    try {
      const response = await fetch(
        'https://todo-redev.herokuapp.com/api/todos',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      const data = await response.json();
      setDataList(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);
  return (
    <div className="todo-container">
      <Header />
      <Input setDataList={setDataList} />
      <List dataList={dataList} setDataList={setDataList} status={status} />
      <FilterButton setStatus={setStatus} />
      <CounterAndTrashButton dataList={dataList} setDataList={setDataList} />
      <Logout />
    </div>
  );
};

export default TodoPage;
