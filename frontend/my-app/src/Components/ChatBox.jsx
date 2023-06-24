import React from 'react';

const ChatBox = () => {
  const messages = [
    { id: 1, text: 'Hello', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'bot' },
    { id: 3, text: 'How are you?', sender: 'bot' },
    { id: 4, text: 'I\'m doing great, thanks!', sender: 'user' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto px-4 py-8">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-lg p-4 shadow ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
      </div>
    </div>
  );
};

export default ChatBox;
