import React from 'react';

const Filters = ({ setFilters, language }) => {
  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mb-4">
      <div className="flex gap-4">
        <select
          name="status"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">{language === 'en' ? 'Status' : 'Status'}</option>
          <option value="Alive">{language === 'en' ? 'Alive' : 'Lebt'}</option>
          <option value="Dead">{language === 'en' ? 'Dead' : 'Tot'}</option>
          <option value="unknown">{language === 'en' ? 'Unkown' : 'Unbekannten'}</option>
        </select>
        <select
          name="species"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">{language === 'en' ? 'Species' : 'Spezies'}</option>
          <option value="Human">{language === 'en' ? 'Human' : 'Menschlich'}</option>
          <option value="Alien">{language === 'en' ? 'Alien' : 'Ausländer'}</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
