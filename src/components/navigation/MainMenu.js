import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MainMenu = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-xl font-bold">ЗСУ Система</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Головна</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/dashboard" className="hover:text-gray-300">Панель</Link></li>
              <li>
                <button 
                  onClick={logout} 
                  className="hover:text-red-500"
                >
                  Вийти
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-gray-300">Вхід</Link></li>
              <li><Link to="/register" className="hover:text-gray-300">Реєстрація</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;