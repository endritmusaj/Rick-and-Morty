import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-xl">{language === 'en' ? 'Rick and Morty Characters' : 'Rick und Morty Charaktere'}</h1>
      </header>
      <main className="p-4">
        <CharacterList language={language} />
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center fixed bottom-0 left-0 right-0">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </footer>
    </div>
  );
};

export default App;
