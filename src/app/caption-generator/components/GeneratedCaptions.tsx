// components/GeneratedCaption.tsx
import React from "react";

interface GeneratedCaptionProps {
  output: string;
  copyToClipboard: (caption: string) => void;
}

const GeneratedCaption: React.FC<GeneratedCaptionProps> = ({ output, copyToClipboard }) => (
  <div className="mt-6 w-full max-w-lg p-4 bg-white shadow-lg rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <p className="text-gray-800">{output}</p>
      <button onClick={() => copyToClipboard(output)} className="ml-2 text-blue-600 hover:text-blue-800">
        Copy
      </button>
    </div>
  </div>
);

export default GeneratedCaption;
