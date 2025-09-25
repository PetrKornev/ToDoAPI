import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const userNameError = errors.username?.message;
  const genderError = errors.gender?.message;
  const ageError = errors.age?.message;
  const errorMessage = (error) =>
    error ? <p className="error-text">{error}</p> : null;

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        'https://todo-redev.herokuapp.com/api/users/register',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
      const dataFromAPI = await response.json();
      console.log(dataFromAPI);

      if (dataFromAPI.id) {
        setModalMessage(`Успешная регистрация: ${dataFromAPI.username}`);
      } else {
        setModalMessage(`Ошибка: ${dataFromAPI.message}`);
      }
      setIsModalOpen(true);
    } catch (error) {
      setModalMessage(`Ошибка: ${dataFromAPI.message}`);
      setIsModalOpen(true);
    }
  };
  return (
    <div className="registration-container">
      <h2 className="registration-header">Регистрация пользователя</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <input
          className="registration-input"
          type="text"
          placeholder="Введите имя пользователя"
          {...register('username', {
            required: 'Поле обязательно к заполнению'
          })}
        />
        {errorMessage(userNameError)}
        <input
          className="registration-input"
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
          className="registration-input"
          type="password"
          placeholder="Введите пароль"
          {...register('password', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,}$/,
              message:
                'Пароль должен быть длиной не менее 8 символов, из них минимум 1 заглавная буква, 1 прописная, 1 число и 1 символ'
            }
          })}
        />
        {errorMessage(passwordError)}
        <div className="gender-group">
          <label>
            <input
              type="radio"
              {...register('gender', { required: 'Выберите пол' })}
              value={'male'}
            />
            Мужской
          </label>
          <label>
            <input
              className="registration-input"
              type="radio"
              {...register('gender', { required: 'Выберите пол' })}
              value={'female'}
            />
            Женский
          </label>
        </div>
        {errorMessage(genderError)}
        <input
          className="registration-input"
          type="number"
          placeholder="Введите ваш возраст"
          {...register('age', { required: 'Обязательное поле' })}
        />
        {errorMessage(ageError)}
        <button type="submit" className="registration-button">
          Зарегистрироваться
        </button>
      </form>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalMessage}</p>
            <button
              className="modal-button"
              onClick={() => setIsModalOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
