"use client"
import React from 'react';
import { useGeminiAI } from './hooks/useGeminiAI';
import Root from '@/layouts/Root';
import ChatInput from './components/ChatInput';
import LanguageSelector from './components/LanguageSelector';
import PersonalitySeletor from './components/PersonalitySelector';
import PromptResponses from './components/PromptResponses';
import { popularLanguages } from '@/const/languages';
import { personalities } from './const/personalities';
import { formatResponseAsHTML } from './utils/formatResponseAsHTML';

const ChatBot: React.FC = () => {
  const {
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
  } = useGeminiAI();

  return (
    <Root>
      <div className=" mx-auto flex flex-col px-5">
      
        <PromptResponses
          promptResponses={promptResponses}
          loading={loading}
          formatResponseAsHTML={formatResponseAsHTML}
          endOfResponsesRef={endOfResponsesRef}
        />
        <ChatInput
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleKeyDown={(e) => {
            if (e.key === 'Enter') getResponseForGivenPrompt();
          }}
          getResponseForGivenPrompt={getResponseForGivenPrompt}
          loading={loading}
        />
          <div className="flex items-center">
          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
            languages={popularLanguages}
          />
          <PersonalitySeletor
            personality={personality}
            setPersonality={setPersonality}
            personalities={personalities}
          />
        </div>
      </div>
    </Root>
  );
};

export default ChatBot;
