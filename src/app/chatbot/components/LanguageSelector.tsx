import React from 'react';

interface LanguageDropdownProps {
  language: string;
  setLanguage: (value: string) => void;
  languages: { value: string; language: string }[];
}

const LanguageSelector: React.FC<LanguageDropdownProps> = ({ language, setLanguage, languages }) => (
  <div className="mb-2">
    Language:
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 border border-gray-500 rounded-md"
    >
      {languages.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.language}
        </option>
      ))}
    </select>
  </div>
);

export default LanguageSelector;
