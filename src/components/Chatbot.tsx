import React, { useState } from "react";

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
    const [userInput, setUserInput] = useState("");

    const toggleChatbot = () => setIsOpen(!isOpen);
    const closeChatbot = () => setIsOpen(false); // Close when clicking "X"

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        // Append user message
        setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
        setUserInput(""); // Clear input field after sending

        // Show bot typing indicator
        setMessages((prev) => [...prev, { text: "Typing...", sender: "bot" }]);

        try {
            const response = await fetch("https://chatbot-4vx7.onrender.com/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userInput }),
            });

            const data = await response.json();

            // Remove typing indicator and add bot response
            setMessages((prev) => [...prev.slice(0, -1), { text: data.response, sender: "bot" }]);
        } catch (error) {
            setMessages((prev) => [...prev.slice(0, -1), { text: "Error connecting to server", sender: "bot" }]);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={toggleChatbot}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                💬
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="fixed bottom-16 right-6 bg-white w-80 h-96 shadow-xl rounded-lg flex flex-col">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
                        <span>Chatbot</span>
                        <button onClick={closeChatbot} className="text-white text-lg">
                            &times;
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`p-2 rounded-lg max-w-xs ${
                                        msg.sender === "user"
                                            ? "bg-gray-200 text-gray-800"
                                            : "bg-blue-100 text-black"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Field */}
                    <div className="p-3 border-t flex items-center">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") sendMessage();
                            }}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border rounded-lg"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-600 text-white p-2 ml-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
