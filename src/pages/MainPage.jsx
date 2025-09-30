import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Header from '../components/header';
import List from '../components/list';
import Input from '../components/input';
import CounterAndTrashButton from '../components/counterAndTrashButton';
import FilterButton from '../components/filterButton';
import Login from '../components/Login';
import Registration from '../components/Registration';
import PrivateRoute from '../utils/PrivateRoute';
import Logout from '../components/Logout';
import './App.css';

function MainPage() {
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState('all');

  const sendGetRequest = async () => {
    if (!localStorage.getItem('token')) {
      return;
    } else {
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
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<PrivateRoute />}>
        <Route
          path="/toDoList"
          element={
            <div className="todo-container">
              <Header />
              <Input setDataList={setDataList} />
              <List
                dataList={dataList}
                setDataList={setDataList}
                status={status}
              />
              <FilterButton setStatus={setStatus} />
              <CounterAndTrashButton
                dataList={dataList}
                setDataList={setDataList}
              />
              <Logout />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default MainPage;
