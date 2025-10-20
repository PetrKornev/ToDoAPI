import { useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton';
import CheckboxForCompleted from '../CheckboxForCompleted';
import EditableTaskText from '../EditableTaskText';

const ListOfTasks = () => {
  const { tasks } = useSelector((state) => state.list);
  const { currentFilter } = useSelector((state) => state.filter);

  const filterTasks = tasks.filter((item) => {
    if (currentFilter === 'active') return !item.completed;
    if (currentFilter === 'completed') return item.completed;
    return true;
  });

  return (
    <ul className="todo-list">
      {filterTasks.length === 0 ? (
        <p className="no-tasks">У вас еще нет задач</p>
      ) : (
        filterTasks.map((item) => (
          <li className="todo-item" key={item.id}>
            <CheckboxForCompleted id={item.id} completed={item.completed} />
            <EditableTaskText
              id={item.id}
              text={item.text}
              completed={item.completed}
              isEditing={item.isEditing}
            />
            <DeleteButton id={item.id} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ListOfTasks;
