import React, { useState } from 'react';
// import ChatList from '../components/ChatList/Chatlist';
// import ChatWindow from '../components/ChatWindow';
import pic1 from "../../Images/user/user1.jpeg";
import pic2 from "../../Images/user/user2.jpeg";
import pic3 from "../../Images/user/user2.jpg";
import './chating.css';
import ChatList from '../ChatList/Chatlist';
import ChatWindow from '../ChatWindow/ChatWindow';

const chatsData = [
    { id: 1, name: 'Alice', messages: ['Hi!', 'How are you?'], profileImage: pic1, timing: "12:40" },
    { id: 2, name: 'Bob', messages: ['Hello!', 'What’s up?'], profileImage: pic2, timing: "03:12" },
    { id: 3, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: "12:00" },
    { id: 4, name: 'Alice', messages: ['Hi!', 'How are you?'], profileImage: pic1, timing: "12:40" },
    { id: 5, name: 'Bob', messages: ['Hello!', 'What’s up?'], profileImage: pic2, timing: "03:12" },
    { id: 6, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: "12:00" },
    { id: 7, name: 'Alice', messages: ['Hi!', 'How are you?'], profileImage: pic1, timing: "12:40" },
    { id: 8, name: 'Bob', messages: ['Hello!', 'What’s up?'], profileImage: pic2, timing: "03:12" },
    { id: 9, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: "12:00" },
    { id: 10, name: 'Charlie', messages: ['Hey there!', 'Long time no see.'], profileImage: pic3, timing: "12:00" },
];

const ChatingPage = () => {
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [chatList, setChatList] = useState(chatsData);
    const [newMessage, setNewMessage] = useState('');

    const selectedChat = chatList.find(chat => chat.id === selectedChatId);

    const handleSendMessage = () => {
        if (newMessage.trim() === '' || !selectedChatId) return;

        const updatedChats = chatList.map(chat => {
            if (chat.id === selectedChatId) {
                return {
                    ...chat,
                    messages: [...chat.messages, newMessage],
                };
            }
            return chat;
        });

        setChatList(updatedChats);
        setNewMessage('');
    };

    return (
        <div style={{ display: 'flex' }}>
            <ChatList
                chatList={chatList}
                selectedChatId={selectedChatId}
                setSelectedChatId={setSelectedChatId}
            />
            <ChatWindow
                selectedChat={selectedChat}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                handleSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default ChatingPage;
