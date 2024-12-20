import React, { useState } from "react";

const ChatModal = ({ isOpen, onClose, id, product }) => {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl h-[600px] flex flex-col shadow-lg">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Order #{id}</h3>
            <p className="text-sm text-gray-500">{product}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            X
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI Message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white bg-[#15B79E]">
              AI
            </div>
            <div className="relative bg-gray-100 rounded-2xl p-4 max-w-[80%]">
              <p className="text-gray-900">How can I help you with this order?</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 flex-row-reverse">
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              U
            </div>
            <div className="relative bg-[#15B79E] text-white rounded-2xl p-4 max-w-[80%]">
              <p>I have a question about the delivery time.</p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => {
                console.log("Message sent:", message);
                setMessage("");
              }}
              className="bg-[#15B79E] text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
