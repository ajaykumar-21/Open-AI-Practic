import React, { useState } from "react";
// import axios from "axios";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(messages);

  const mock = true;

  const getMockResponse = (text) => {
    const mockReplies = {
      hello: "Hi there! How can I assist you today?",
      help: "Sure! I'm here to help. What do you need?",
      joke: "Why don’t scientists trust atoms? Because they make up everything!",
      default: "I'm just a fake AI, but you're doing great!",
    };

    const key = text.toLowerCase();
    return mockReplies[key] || mockReplies.default;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = [...messages, { role: "user", content: input }];
    setMessages(newMessage);
    setInput("");

    if (mock) {
      const mockReply = getMockResponse(input);
      const botReply = { role: "assistant", content: mockReply };
      setTimeout(() => {
        setMessages([...newMessage, botReply]);
      }, 500);
    }
  };

  return (
    <div className="chat-container">
      <h2>AI Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "user" : "bot"}>
            <strong>{msg.role === "user" ? "You: " : "AI: "}</strong>
            {msg.content}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;
