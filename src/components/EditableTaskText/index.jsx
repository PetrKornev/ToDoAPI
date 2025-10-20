import { useDispatch } from 'react-redux';
import { editingTask, updateTaskText } from '../../redux/slices/listSlice';

const EditableTaskText = ({ id, text, completed, isEditing }) => {
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    dispatch(updateTaskText({ id: id, newText: e.target.value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(editingTask(id));
    }
  };

  const handleOpenInput = () => {
    dispatch(editingTask(id));
  };

  return (
    <>
      {!isEditing ? (
        <>
          <span
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
          >
            {text}
          </span>
          <button className="edit-btn" onClick={handleOpenInput}>
            Изменить
          </button>
        </>
      ) : (
        <input
          className="task-edit-input"
          value={text}
          onChange={handleEdit}
          onKeyDown={handleKeyDown}
        />
      )}
    </>
  );
};

export default EditableTaskText;
