// components/CaptionOptions.tsx
import React from "react";
import { popularLanguages } from "@/const/languages";

interface CaptionOptionsProps {
  captionLength: string;
  setCaptionLength: (length: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  customPromptEnabled: boolean;
}

const CaptionOptions: React.FC<CaptionOptionsProps> = ({
  captionLength,
  setCaptionLength,
  language,
  setLanguage,
  customPromptEnabled,
}) => (
  <>
    <div className="mb-4 w-full">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Caption Length:
        <select
          value={captionLength}
          onChange={(e) => setCaptionLength(e.target.value)}
          className="mt-1 p-5 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-800"
          disabled={customPromptEnabled}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </label>
    </div>

    <div className="mb-4 w-full">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="mt-1 p-5 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          disabled={customPromptEnabled}
        >
          {popularLanguages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.language}
            </option>
          ))}
        </select>
      </label>
    </div>
  </>
);

export default CaptionOptions;
