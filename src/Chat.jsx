// Chat.js
import './Chat.css';
import React, { useState } from 'react';

const Chat = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const postMessage = () => {
        if (message && name) {
            const fullMessage = `${name}: ${message}`;
            setMessages([...messages, fullMessage]);
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Message Board</h1>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                style={{marginRight: '10px'}}
            />
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Leave a message"
            />
            <button onClick={postMessage}>Post</button>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default Chat;
