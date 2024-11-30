import React, { useState } from "react";
import { sendMessageToAI } from "./api";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { sender: "User", text: input };
            setMessages([...messages, userMessage]);

            const aiResponse = await sendMessageToAI(input);
            const aiMessage = { sender: "AI", text: aiResponse };

            setMessages((prevMessages) => [...prevMessages, aiMessage]);
            setInput("");
        }
    };

    return (
        <div>
            <div style={{ height: "400px", overflowY: "scroll", border: "1px solid #ccc" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === "AI" ? "left" : "right" }}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chat;
