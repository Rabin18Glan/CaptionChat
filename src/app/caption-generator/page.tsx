// ImageAnalyzer.tsx
"use client";

import Root from '@/layouts/Root';
import React from "react";
import CaptionOptions from "./components/CaptionOptions";
import CustomPrompt from "./components/CustomPrompt";
import FileUploader from "./components/FileUploader";
import GeneratedCaption from "./components/GeneratedCaptions";
import useImageAnalyzer from "./hooks/useImageAnalyzer";
import { copyToClipboard } from "./utils/copyToClipboard";

const ImageAnalyzer: React.FC = () => {
  const {
    selectedFile,
    captionLength,
    language,
    output,
    loading,
    customPromptEnabled,
    customPrompt,
    handleFileChange,
    setCaptionLength,
    setLanguage,
    setCustomPromptEnabled,
    setCustomPrompt,
    generateCaption,
  } = useImageAnalyzer();

  return (
    <Root>
      <div className="w-full max-w-lg mx-auto p-8">
      <FileUploader selectedFile={selectedFile} handleFileChange={handleFileChange} />
      <CaptionOptions
        captionLength={captionLength}
        setCaptionLength={setCaptionLength}
        language={language}
        setLanguage={setLanguage}
        customPromptEnabled={customPromptEnabled}
      />
      <CustomPrompt
        customPrompt={customPrompt}
        setCustomPrompt={setCustomPrompt}
        customPromptEnabled={customPromptEnabled}
        setCustomPromptEnabled={setCustomPromptEnabled}
      />
      <button
        onClick={generateCaption}
        disabled={!selectedFile || loading}
        className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg"
      >
        {loading ? "Analyzing..." : "Generate Caption"}
      </button>
      {output && <GeneratedCaption output={output} copyToClipboard={copyToClipboard} />}
    </div>
      </Root>
  );
};

export default ImageAnalyzer;
