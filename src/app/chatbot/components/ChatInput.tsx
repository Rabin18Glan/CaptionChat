import React, { ChangeEvent } from 'react';

interface ChatInputProps {
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  getResponseForGivenPrompt: () => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ inputValue, handleInputChange, handleKeyDown, getResponseForGivenPrompt, loading }) => (
  <div className="flex mb-2">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Ask Me Something You Want"
      className="flex-1 p-3 border text-black border-gray-500 rounded-l-md focus:outline-none focus:border-gray-700"
    />
    <button
      onClick={getResponseForGivenPrompt}
      className="px-4 bg-gray-800 text-white rounded-r-md hover:bg-black disabled:opacity-50"
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Send'}
    </button>
  </div>
);

export default ChatInput;
