import { useForm } from 'react-hook-form';

const Login = () => {
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
    try {
      const response = await fetch(
        'https://todo-redev.herokuapp.com/api/auth/login',
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
      localStorage.setItem('token', dataFromAPI.token);
    } catch (error) {
      console.log(error.message);
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
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^(?=.*[A-Z]).{6,}$/
            }
          })}
        />
        {errorMessage(passwordError)}
        <button type="submit" className="login-button">
          Войти
        </button>
        <a>Не зарегистрированы?</a>
      </form>
    </div>
  );
};

export default Login;
