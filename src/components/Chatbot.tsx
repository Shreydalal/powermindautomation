import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    // Show typing indicator
    setMessages((prev) => [...prev, { text: "Typing...", isUser: false }]);

    try {
      const response = await fetch("https://chatbot-4vx7.onrender.com//chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { text: data.response, isUser: false }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Server error. Try again later.", isUser: false }]);
    }
  };

  return (
    <div>
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Chat
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg w-80 p-4 border">
          <div className="flex justify-between items-center mb-2">
            <strong>Chatbot</strong>
            <button onClick={toggleChat} className="text-red-500">X</button>
          </div>
          <div className="h-60 overflow-y-auto border p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.isUser ? "bg-gray-200 text-gray-800 self-end" : "bg-gray-100 text-gray-500 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border flex-1 p-2"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white px-3 ml-2">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
