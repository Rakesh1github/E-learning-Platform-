import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { FaRobot, FaPaperPlane, FaUser, FaSpinner } from "react-icons/fa";

// IMPORTANT: Never expose keys publicly in production.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyD-CjQWD27hsiZGBB3HqgBexpDWMcvOJXs";

export default function ChatbotPage() {
    const [messages, setMessages] = useState([
        { role: "model", text: "Hello! I'm your AI Study Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const genAI = new GoogleGenerativeAI(API_KEY);

            // 🔥 Correct model name
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash-preview-09-2025"
            });

            // Prepare history (excluding initial greeting)
            const historyMessages = messages.slice(1).map((m) => ({
                role: m.role === "model" ? "model" : "user",
                parts: [{ text: m.text }],
            }));

            const chat = model.startChat({
                history: historyMessages,
            });

            const result = await chat.sendMessage(input);
            const text = result.response.text();

            setMessages((prev) => [...prev, { role: "model", text }]);
        } catch (error) {
            console.error("Gemini Error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "model", text: "❌ Error: " + (error.message || "Something went wrong!") }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="h-[100dvh] bg-gray-50 flex flex-col overflow-hidden">

            {/* Header */}
            <div className="bg-white shadow-sm p-3 md:p-4 sticky top-0 z-10 shrink-0">
                <div className="max-w-4xl mx-auto flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl">
                        <FaRobot />
                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-gray-800">AI Study Assistant</h1>
                        <p className="text-xs text-gray-500">Powered by Gemini</p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 max-w-4xl w-full mx-auto p-3 md:p-4 flex flex-col gap-4 overflow-y-auto scroll-smooth">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex gap-2 md:gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs md:text-sm shrink-0 
                                ${msg.role === "user" ? "bg-gray-700" : "bg-blue-500"}`}
                        >
                            {msg.role === "user" ? <FaUser /> : <FaRobot />}
                        </div>

                        <div
                            className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl shadow-sm prose prose-sm 
                                ${msg.role === "user"
                                    ? "bg-gray-800 text-white rounded-tr-none"
                                    : "bg-white text-gray-800 rounded-tl-none"
                                }`}
                        >
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm shrink-0">
                            <FaRobot />
                        </div>
                        <div className="bg-white p-3 md:p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-gray-500">
                            <FaSpinner className="animate-spin" /> Thinking...
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <div className="bg-white border-t p-3 md:p-4 shrink-0">
                <div className="max-w-4xl mx-auto flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask anything..."
                        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 md:py-3 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                                   focus:border-transparent text-sm md:text-base"
                        disabled={isLoading}
                    />

                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 
                                   rounded-xl hover:bg-blue-700 disabled:opacity-50 
                                   transition flex items-center gap-2 font-semibold"
                    >
                        <FaPaperPlane /> <span className="hidden md:inline">Send</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
