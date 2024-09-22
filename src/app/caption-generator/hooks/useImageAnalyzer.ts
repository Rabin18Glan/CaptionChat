// hooks/useImageAnalyzer.ts
import { useState } from "react";
import { analyzeImage } from "../utils/analyzeImage";
import Error from "next/error";

const useImageAnalyzer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [captionLength, setCaptionLength] = useState<string>("medium");
  const [language, setLanguage] = useState<string>("en");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [customPromptEnabled, setCustomPromptEnabled] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const generateCaption = async () => {
    if (!selectedFile) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);
    setOutput("");

    try {
      const result = await analyzeImage(selectedFile, captionLength, language, customPromptEnabled, customPrompt);
      setOutput(result);
    } catch (error ) {
      setOutput(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedFile,
    captionLength,
    language,
    output,
    loading,
    customPromptEnabled,
    customPrompt,
    setSelectedFile,
    setCaptionLength,
    setLanguage,
    setOutput,
    setLoading,
    setCustomPromptEnabled,
    setCustomPrompt,
    handleFileChange,
    generateCaption,
  };
};

export default useImageAnalyzer;
