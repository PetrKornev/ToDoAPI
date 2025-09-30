import { Routes, Route } from 'react-router';
import Login from '../components/Login';
import Registration from '../components/Registration';
import PrivateRoute from '../utils/PrivateRoute';
import TodoPage from './TodoPage';
import './App.css';

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<PrivateRoute />}>
        <Route path="/toDoList" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default MainPage;
