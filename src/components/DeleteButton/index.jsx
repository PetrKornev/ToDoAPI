import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/listActions';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <button className="delete-btn" onClick={handleDelete}>
      Удалить
    </button>
  );
};

export default DeleteButton;
