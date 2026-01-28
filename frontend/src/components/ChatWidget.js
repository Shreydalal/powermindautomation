import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import axios from 'axios';
import { toast } from 'sonner';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm the AI Assistant. I can help you book a demo. What's your name?", sender: 'ai' }
    ]);
    const [input, setInput] = useState("");
    const [step, setStep] = useState('name'); // name, email, done
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Process AI response logic
        setTimeout(async () => {
            let aiText = "";
            let nextStep = step;

            if (step === 'name') {
                setFormData(prev => ({ ...prev, name: input }));
                aiText = `Nice to meet you, ${input}! What's the best email address to reach you at?`;
                nextStep = 'email';
            } else if (step === 'email') {
                const email = input;
                setFormData(prev => ({ ...prev, email }));
                aiText = "Perfect! I'm sending your request to our team now...";
                nextStep = 'sending';

                // Trigger sending state then done
                setStep(nextStep);
                setIsTyping(false); // Stop generic typing, show specific msg
                setMessages(prev => [...prev, { id: Date.now() + 1, text: aiText, sender: 'ai' }]);

                // Submit to n8n
                try {
                    await axios.post("https://n8n-latest-w318.onrender.com/webhook/new-lead", {
                        fullName: formData.name,
                        email: email,
                        company: "Chat Widget Lead",
                        source: "Chat Widget",
                        service: "General Inquiry",
                        message: "Lead captured via Chat Widget"
                    });

                    setTimeout(() => {
                        setMessages(prev => [...prev, {
                            id: Date.now() + 2,
                            text: "All set! ✅ We'll reach out to schedule your demo shortly. Is there anything else I can help with?",
                            sender: 'ai'
                        }]);
                        setStep('done');
                    }, 1500);
                } catch (error) {
                    console.error("Chat submission error", error);
                    setMessages(prev => [...prev, {
                        id: Date.now() + 2,
                        text: "Oops, I had trouble connecting. Please try the main contact form!",
                        sender: 'ai'
                    }]);
                    setStep('done');
                }
                return; // Exit here to handle async flow manually above
            } else {
                // General chat after capture
                aiText = "Thanks! Please use the 'Book Free Demo' button above for more details, or I can have someone call you.";
            }

            setIsTyping(false);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: aiText, sender: 'ai' }]);
            setStep(nextStep);

        }, 1200); // Simulated delay
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] sm:w-[380px] shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <Card className="border-0 h-[500px] flex flex-col bg-white">
                            {/* Header */}
                            <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">AI Assistant</h3>
                                        <div className="flex items-center gap-1.5 opacity-90">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            <span className="text-xs">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:bg-white/20 rounded-full"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                                    ? 'bg-blue-600 text-white rounded-tr-sm'
                                                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-sm'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-white border-t border-slate-100">
                                <form onSubmit={handleSendMessage} className="flex gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Type a message..."
                                        className="flex-1 focus-visible:ring-blue-500"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all"
                                        disabled={!input.trim() || isTyping}
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/30 hover:bg-blue-500 transition-all duration-300 relative group"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <>
                        <MessageSquare className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                    </>
                )}

                {/* Tooltip hint on hover when closed */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md text-slate-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Chat with AI
                        <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-4 border-transparent border-l-white"></div>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
