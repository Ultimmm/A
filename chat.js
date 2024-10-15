import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');  // Connect to Socket.io server

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Listen for incoming messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Cleanup the socket connection when the component is unmounted
        return () => socket.disconnect();
    }, []);

    // Handle sending a message
    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            socket.emit('message', input);  // Emit the message to the server
            setInput('');  // Clear the input field
        }
    };

    return (
        <div>
            <h2>Chat Room</h2>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat;
