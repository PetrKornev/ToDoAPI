import { useEffect, useState } from 'react';
import Header from '../components/header';
import List from '../components/list';
import Input from '../components/input';
import CounterAndTrashButton from '../components/counterAndTrashButton';
import FilterButton from '../components/filterButton';
import Login from '../components/Login';
import Registration from '../components/Registration';
import './App.css';

function MainPage() {
  const [token, setToken] = useState('');
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState('all');
  const getToken = async () => {
    const response = await fetch(
      'https://todo-redev.herokuapp.com/api/auth/login',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'kornevpetya@mail.ru',
          password: '123_Qwerty'
        })
      }
    );
    const data = await response.json();
    setToken(data.token);
  };

  const sendGetRequest = async () => {
    if (!token) {
      return;
    } else {
      try {
        const response = await fetch(
          'https://todo-redev.herokuapp.com/api/todos',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        );
        const data = await response.json();
        setDataList(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    sendGetRequest();
  }, [token]);

  return (
    // <div className="todo-container">
    //   <Header />
    //   <Input setDataList={setDataList} token={token} />
    //   <List
    //     dataList={dataList}
    //     token={token}
    //     setDataList={setDataList}
    //     status={status}
    //   />
    //   <FilterButton setStatus={setStatus} />
    //   <CounterAndTrashButton
    //     dataList={dataList}
    //     setDataList={setDataList}
    //     token={token}
    //   />
    // </div>
    <Login />
    // <Registration />
  );
}

export default MainPage;
