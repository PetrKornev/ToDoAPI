import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../utils/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <button className="logout-button" onClick={handleLogout}>
      Выйти
    </button>
  );
};

export default Logout;
