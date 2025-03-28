import React from 'react';
import { 
  ArrowRightIcon, 
  HamburgerMenuIcon 
} from '@radix-ui/react-icons';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Навігаційний header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/trident.svg" 
            alt="Тризуб" 
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold">App name</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/склад" className="text-gray-700 hover:text-black">Склад</a>
          <a href="/технічна-підтримка" className="text-gray-700 hover:text-black">Технічне підтримка</a>
        </nav>
        
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-black">Увійти</button>
          <button className="bg-[#2C3E50] text-white px-4 py-2 rounded-md hover:bg-black">
            Зареєструватися
          </button>
          <button className="md:hidden">
            <HamburgerMenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Головний контент */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div 
            className="bg-white/50 backdrop-blur-sm rounded-xl mb-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c0c0c0' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
            }}
          >
            <h1 className="text-5xl font-bold text-gray-900 py-12">Title</h1>
            <p className="text-xl text-gray-700 px-12 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-[#2C3E50] text-white px-6 py-3 rounded-md hover:bg-black flex items-center">
              Почати роботу 
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-700 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100">
              Дізнатися більше
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-4 px-6 flex justify-between items-center">
        <nav className="flex space-x-6">
          <a href="/склад" className="hover:text-gray-300">Склад</a>
          <a href="/технічна-підтримка" className="hover:text-gray-300">Технічне підтримка</a>
        </nav>
        <p className="text-sm">© {new Date().getFullYear()} App name</p>
      </footer>
    </div>
  );
};

export default HomePage;