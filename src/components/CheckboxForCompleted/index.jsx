import { useDispatch } from 'react-redux';
import { taskIsCompleted } from '../../redux/actions/listActions';

const CheckboxForCompleted = ({ id, completed }) => {
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(taskIsCompleted(id));
  };
  return (
    <input type="checkbox" checked={completed} onChange={handleCompleted} />
  );
};

export default CheckboxForCompleted;
