import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [errorOfLoginMessage, setErrorOfLoginMessage] = useState('');
  const [errorOfLogin, setErrorOfLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const errorMessage = (error) =>
    error ? <p className="error-text">{error}</p> : null;

  const onSubmit = async (data) => {
    setErrorOfLogin(false);
    setErrorOfLoginMessage('');
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: 'post',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
      const dataFromAPI = await response.json();

      if (response.ok) {
        localStorage.setItem('token', dataFromAPI.token);
        navigate('/toDoList');
      } else {
        setErrorOfLogin(true);
        setErrorOfLoginMessage(dataFromAPI.message || 'Ошибка входа');
        setTimeout(() => {
          setErrorOfLogin(false);
          setErrorOfLoginMessage('');
        }, 5000);
      }
    } catch (error) {
      setErrorOfLogin(true);
      setErrorOfLoginMessage('Ошибка сети:' + error.message);
      setTimeout(() => {
        setErrorOfLogin(false);
        setErrorOfLoginMessage('');
      }, 5000);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Вход</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input
          className="login-input"
          type="email"
          placeholder="Введите email"
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Введите корректный email'
            }
          })}
        />
        {errorMessage(emailError)}
        <input
          className="login-input"
          type="password"
          placeholder="Введите пароль"
          {...register('password', {
            required: 'Поле обязательно к заполнению'
          })}
        />
        {errorMessage(passwordError)}
        {errorOfLogin && <p className="error-text">{errorOfLoginMessage}</p>}
        <button type="submit" className="login-button">
          Войти
        </button>
        <Link to="/registration">Не зарегистрированы?</Link>
      </form>
    </div>
  );
};

export default Login;
