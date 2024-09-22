import React from 'react';

interface CustomPromptProps {
  customPrompt: string;
  setCustomPrompt: (prompt: string) => void;
  customPromptEnabled: boolean;
  setCustomPromptEnabled: (enabled: boolean) => void;
}

const CustomPrompt: React.FC<CustomPromptProps> = ({
  customPrompt,
  setCustomPrompt,
  customPromptEnabled,
  setCustomPromptEnabled,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPromptEnabled(event.target.checked);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomPrompt(event.target.value);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="useCustomPrompt"
          checked={customPromptEnabled}
          onChange={handleCheckboxChange}
          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="useCustomPrompt" className="text-sm font-medium text-gray-700">
          Use Custom Prompt
        </label>
      </div>

      {customPromptEnabled && (
        <div className="mt-2">
          <label htmlFor="customPromptText" className="block mb-1 text-sm font-medium text-gray-700">
            Custom Prompt:
          </label>
          <textarea
            id="customPromptText"
            value={customPrompt}
            onChange={handleTextareaChange}
            className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            placeholder="Enter your custom prompt here..."
          />
        </div>
      )}
    </div>
  );
};

export default CustomPrompt;