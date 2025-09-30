import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <button className="logout-button" onClick={handleLogout}>
      Выйти
    </button>
  );
};

export default Logout;
