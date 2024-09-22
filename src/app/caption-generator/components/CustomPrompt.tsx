// components/CustomPrompt.tsx
import React from "react";

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
}) => (
  <div className="mb-4 flex items-center">
    <input
      type="checkbox"
      checked={customPromptEnabled}
      onChange={() => setCustomPromptEnabled(!customPromptEnabled)}
      className="mr-2"
    />
    <label className="text-sm font-medium text-gray-700">Use Custom Prompt</label>

    {customPromptEnabled && (
      <div className="mb-4 w-full">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Custom Prompt:
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            className="mt-1 p-5 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
            rows={3}
          />
        </label>
      </div>
    )}
  </div>
);

export default CustomPrompt;
