import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../services/authService';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const userData = await login(credentials);
      authLogin(userData);
      navigate('/dashboard');
    } catch (err) {
      setError('Невірний логін або пароль');
    }
  };

  return (
    <div className="login-form">
      <h2 className="text-2xl mb-4 text-center">Вхід</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Ім'я користувача"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          label="Пароль"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button type="submit" className="w-full">
          Увійти
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;