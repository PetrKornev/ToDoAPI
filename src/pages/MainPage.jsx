import CounterAndTrashButton from '../components/CounterAndTrashButton';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';
import Input from '../components/Input';
import ListOfTasks from '../components/ListOfTasks';
import './App.css';

function MainPage() {
  return (
    <div className="todo-container">
      <Header />
      <Input />
      <ListOfTasks />
      <FilterButtons />
      <CounterAndTrashButton />
    </div>
  );
}

export default MainPage;
