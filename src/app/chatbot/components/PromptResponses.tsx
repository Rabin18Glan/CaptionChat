import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

interface PromptResponsesProps {
  promptResponses: { question: string; answer: string }[];
  loading: boolean;
  formatResponseAsHTML: (response: string) => string;
  endOfResponsesRef: React.RefObject<HTMLDivElement>;
}

const PromptResponses: React.FC<PromptResponsesProps> = ({
  promptResponses,
  loading,
  formatResponseAsHTML,
  endOfResponsesRef,
}) => (
  <div className="overflow-y-auto h-[79vh]  p-2  border-gray-300 text-gray-700">
    {promptResponses.map((item, index) => (
      <div key={index} className="flex flex-col mt-3">
        <div className="self-end mb-1 p-4 bg-blue-100 rounded-bl-lg rounded-t-lg">
          <strong>{item.question}</strong>
        </div>
        <div className="self-start p-4 bg-gray-100 shadow-sm rounded-br-lg rounded-t-lg">
          <div
            className={`response-text ${index === promptResponses.length - 1 ? 'font-bold' : ''}`}
            dangerouslySetInnerHTML={{ __html: formatResponseAsHTML(item.answer) }}
          />
          {loading && index === promptResponses.length - 1 && (
            <div className="flex items-center justify-start mt-2">
              <ThreeDots height="20" width="60" color="#000" ariaLabel="three-dots-loading" />
            </div>
          )}
        </div>
      </div>
    ))}
    <div ref={endOfResponsesRef} />
  </div>
);

export default PromptResponses;
