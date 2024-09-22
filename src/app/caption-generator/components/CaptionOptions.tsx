import { popularLanguages } from '@/const/languages';
import React from 'react';

// Types
type CaptionLength = 'short' | 'medium' | 'long';

interface CaptionOptionsProps {
  captionLength: CaptionLength;
  setCaptionLength: (length: CaptionLength) => void;
  language: string;
  setLanguage: (language: string) => void;
  customPromptEnabled: boolean;
}

// Component
const CaptionOptions: React.FC<CaptionOptionsProps> = ({
  captionLength,
  setCaptionLength,
  language,
  setLanguage,
  customPromptEnabled,
}) => {
  // Handlers
  const handleCaptionLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCaptionLength(event.target.value as CaptionLength);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  // Render
  return (
    <>
      <SelectField
        label="Caption Length"
        value={captionLength}
        onChange={handleCaptionLengthChange}
        disabled={customPromptEnabled}
        options={[
          { value: 'short', label: 'Short' },
          { value: 'medium', label: 'Medium' },
          { value: 'long', label: 'Long' },
        ]}
      />

      <SelectField
        label="Language"
        value={language}
        onChange={handleLanguageChange}
        disabled={customPromptEnabled}
        options={popularLanguages.map(lang => ({ value: lang.value, label: lang.language }))}
      />
    </>
  );
};

// Helper component for select fields
interface SelectFieldProps<T> {
  label: string;
  value: T;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
  options: Array<{ value: string; label: string }>;
}

const SelectField = <T extends string>({
  label,
  value,
  onChange,
  disabled,
  options,
}: SelectFieldProps<T>) => (
  <div className="mb-4 w-full">
    <label className="block mb-2 text-sm font-medium text-gray-700">
      {label}:
      <select
        value={value}
        onChange={onChange}
        className="mt-1 p-5 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default CaptionOptions;