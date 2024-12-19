import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <div className='flex flex-row justify-center'>
        <p className='p-2'>{language === 'en' ? 'Select your preferred language' : 'Wählen Sie Ihre bevorzugte Sprache'}:</p>
      <button
        className={`p-2 ${language === 'en' ? 'font-bold' : ''}`}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
      <button
        className={`p-2 ${language === 'de' ? 'font-bold' : ''}`}
        onClick={() => setLanguage('de')}
      >
        German
      </button>
    </div>
  );
};

export default LanguageSwitcher;
