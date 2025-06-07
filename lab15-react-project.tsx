import React, { useState } from 'react';

// Нормализатор CSS
const GlobalStyles = () => (
  <style>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    
    html, body, #root {
      height: 100%;
    }
  `}</style>
);

// Компонент Head
const Head = ({ activeSection, onSectionChange }) => {
  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-10 shadow-md">
      <nav className="flex justify-center space-x-8">
        <button 
          onClick={() => onSectionChange('news')}
          className={`hover:text-blue-200 transition-colors px-3 py-2 rounded ${
            activeSection === 'news' ? 'bg-blue-700' : ''
          }`}
        >
          Новости
        </button>
        <button 
          onClick={() => onSectionChange('about')}
          className={`hover:text-blue-200 transition-colors px-3 py-2 rounded ${
            activeSection === 'about' ? 'bg-blue-700' : ''
          }`}
        >
          О проекте
        </button>
        <button 
          onClick={() => onSectionChange('contacts')}
          className={`hover:text-blue-200 transition-colors px-3 py-2 rounded ${
            activeSection === 'contacts' ? 'bg-blue-700' : ''
          }`}
        >
          Контакты
        </button>
      </nav>
    </header>
  );
};

// Компонент Section (левая часть)
const Section = () => {
  return (
    <section className="bg-gray-100 p-4 border-r border-gray-300 h-full">
      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <img 
            src="https://via.placeholder.com/200x150/4A90E2/FFFFFF?text=Lab15+Image" 
            alt="Изображение проекта" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

// Компонент Article (центральная часть)
const Article = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'news':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Новости</h1>
            <p className="text-gray-600 leading-relaxed">
              Добро пожаловать в раздел новостей! Здесь вы найдете самые актуальные 
              новости и обновления нашего проекта. Мы регулярно публикуем информацию 
              о новых функциях, улучшениях и важных событиях. 
              Следите за обновлениями, чтобы быть в курсе всех изменений.
              <br /><br />
              Последние новости включают обновление интерфейса, добавление новых 
              функций и улучшение производительности системы.
            </p>
          </div>
        );
      case 'about':
        return (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-blue-600 text-center">
              Южный федеральный университет
            </h1>
          </div>
        );
      case 'contacts':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Контакты</h1>
            <div className="text-xl text-gray-700">
              <p className="mb-2">📞 Телефон: +7 (XXX) XXX-XX-XX</p>
              <p className="mb-2">📧 Email: example@example.com</p>
              <p className="mb-2">📍 Адрес: г. Ростов-на-Дону</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-2">
              Страница не найдена
            </p>
            <p className="text-gray-500">
              Вернитесь на главную или выберите раздел из меню
            </p>
          </div>
        );
    }
  };

  return (
    <article className="bg-white p-6 border-r border-gray-300 h-full overflow-y-auto">
      {renderContent()}
    </article>
  );
};

// Компонент Aside (правая часть)
const Aside = () => {
  return (
    <aside className="bg-gray-50 p-4 h-full">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Автор проекта</h3>
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">Иванов</p>
          <p className="text-gray-700">Иван</p>
          <p className="text-gray-700">Иванович</p>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Студент группы</p>
          <p className="text-sm text-gray-600 font-medium">Lab15</p>
        </div>
      </div>
    </aside>
  );
};

// Компонент Main
const Main = ({ activeSection }) => {
  return (
    <main className="flex-1 grid grid-cols-5 min-h-0">
      <div className="col-span-1">
        <Section />
      </div>
      <div className="col-span-3">
        <Article activeSection={activeSection} />
      </div>
      <div className="col-span-1">
        <Aside />
      </div>
    </main>
  );
};

// Компонент Footer
const Footer = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU');
  
  return (
    <footer className="bg-gray-800 text-white p-4 text-center border-t">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm">
          © 2024 Lab15 Project | Создано: {currentDate} | Автор: Иванов И.И.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Лабораторная работа №15 - React приложение с Grid-версткой
        </p>
      </div>
    </footer>
  );
};

// Главный компонент приложения
const App = () => {
  const [activeSection, setActiveSection] = useState('news');

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Head activeSection={activeSection} onSectionChange={setActiveSection} />
        <Main activeSection={activeSection} />
        <Footer />
      </div>
    </>
  );
};

export default App;