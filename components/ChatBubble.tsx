
import React from 'react';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  // Basic markdown link parsing for the WhatsApp button
  const renderContent = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const label = match[1];
      const url = match[2];
      
      parts.push(
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 mt-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 space-x-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.236 3.484 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.652zm5.835-3.332c1.515.899 3.3 1.447 5.231 1.448 5.437 0 9.858-4.42 9.858-9.855 0-2.63-.1.233-1.859-2.133-1.86-1.861-4.329-2.885-6.94-2.885-5.437 0-9.857 4.42-9.86 9.855-.001 1.944.575 3.842 1.667 5.441l-1.094 4.002 4.098-1.074z" />
          </svg>
          <span>{label}</span>
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return (
      <div className="whitespace-pre-wrap">
        {parts.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)}
      </div>
    );
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-in fade-in slide-in-from-bottom-2`}>
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm ${
          isUser
            ? 'bg-blue-600 text-white rounded-tr-none'
            : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
        }`}
      >
        <div className="text-sm font-semibold mb-1 opacity-70">
          {isUser ? 'You' : 'Abdul Assistant'}
        </div>
        {renderContent(message.text)}
        {message.isStreaming && (
          <span className="inline-block w-2 h-2 ml-1 bg-blue-400 rounded-full animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
