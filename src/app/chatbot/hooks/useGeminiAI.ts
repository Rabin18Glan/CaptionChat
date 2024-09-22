"use client";
import { useState, useRef, useEffect, ChangeEvent } from 'react';

export const useGeminiAI = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [promptResponses, setPromptResponses] = useState<{ question: string; answer: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('en');
  const [personality, setPersonality] = useState<string>('Normal');
  const endOfResponsesRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async () => {
    if (!inputValue.trim()) return;

    const promptText = `Our previous questions and responses are:${promptResponses.map(
      (message) => "Me:" + message.question + ",Response:" + message.answer
    )} and Now I replied:${inputValue}. Criteria for response:1.Give answer in ${language} only with no translation. 2.Act and Talk as a ${personality} strictly. 3.Don't reply with the same question. 4.Use emojis for a better expression. 5.Reply with an appropriate and meaningful answer for the given user reply`;

    setPromptResponses((prev) => [...prev, { question: inputValue, answer: '' }]);
    setLoading(true);

    try {
      // Calling the Next.js server-side API route
      const res = await fetch('http://localhost:3000/api/gemini/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promptText }),
      });

      const data = await res.json();
      setPromptResponses((prev) => {
        const updatedResponses = [...prev];
        updatedResponses[updatedResponses.length - 1].answer = data.answer;
        return updatedResponses;
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setInputValue('');
    }
  };

  useEffect(() => {
    if (endOfResponsesRef.current) {
      endOfResponsesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [promptResponses]);

  return {
    inputValue,
    promptResponses,
    loading,
    language,
    personality,
    endOfResponsesRef,
    setLanguage,
    setPersonality,
    handleInputChange,
    getResponseForGivenPrompt,
  };
};
