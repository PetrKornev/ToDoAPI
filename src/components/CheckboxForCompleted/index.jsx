import { useDispatch } from 'react-redux';
import { taskCompleted } from '../../redux/slices/listSlice';

const CheckboxForCompleted = ({ id, completed }) => {
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(taskCompleted(id));
  };
  return (
    <input type="checkbox" checked={completed} onChange={handleCompleted} />
  );
};

export default CheckboxForCompleted;
