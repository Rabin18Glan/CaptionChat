import React from 'react';

interface PersonalityDropdownProps {
  personality: string;
  setPersonality: (value: string) => void;
  personalities: { personality: string; name: string }[];
}

const PersonalitySelector: React.FC<PersonalityDropdownProps> = ({ personality, setPersonality, personalities }) => (
  <div className="mb-2">
    Person:
    <select
      value={personality}
      onChange={(e) => setPersonality(e.target.value)}
      className="p-2 border border-blue-500 rounded-md ml-2"
    >
      {personalities.map((person) => (
        <option key={person.personality} value={person.personality}>
          {person.name}
        </option>
      ))}
    </select>
  </div>
);

export default PersonalitySelector;
