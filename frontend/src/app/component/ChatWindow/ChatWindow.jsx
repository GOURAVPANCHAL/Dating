import { useState, useEffect, useRef } from "react";
import socket from "../../utils/socket";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";

const ChatWindow = ({ selectedChat, newMessage, setNewMessage, handleSendMessage, userId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [typingUser, setTypingUser] = useState("");
  const [messages, setMessages] = useState([]);  // Local messages state to display
  const fileInputRef = useRef(null);

  // Register socket events
  useEffect(() => {
    if (userId) {
      socket.emit('register_user', userId);
    }

    socket.on('private_message', (data) => {
      setMessages(prev => [...prev, { text: data.message, fromUser: false }]);
    });

    socket.on('typing', (typingUserId) => {
      setTypingUser(`${typingUserId} is typing...`);
    });

    socket.on('stop_typing', () => {
      setTypingUser('');
    });

    return () => {
      socket.off('private_message');
      socket.off('typing');
      socket.off('stop_typing');
    };
  }, [userId]);

  // Load chat messages only once when chat changes
  useEffect(() => {
    if (selectedChat && selectedChat.messages && messages.length === 0) {
      const initialMessages = selectedChat.messages.map(msg => ({
        text: msg,
        fromUser: false,
      }));
      setMessages(initialMessages);
    }
  }, [selectedChat]);

  const handleEmojiClick = (emojiData) => {
    setNewMessage(prev => prev + emojiData.emoji);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected image: ${file.name}`);
    }
  };

  const onSendMessage = () => {
    const autoReplies = [
      "Hi Alisaa!",
      "I'll get back to you soon.",
      "Can you please clarify?",
      "That's interesting!",
      "Got it, thanks!",
      "Let me check and reply.",
      "I appreciate your input.",
      "Thanks for reaching out!",
    ];

    if (!newMessage.trim()) return;

    const userMessage = { text: newMessage, fromUser: true };
    setMessages(prev => [...prev, userMessage]);

    handleSendMessage(); // send via socket
    setNewMessage("");
    setShowEmojiPicker(false);

    const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
    const clientMessage = { text: randomReply, fromUser: false };

    setTimeout(() => {
      setMessages(prev => [...prev, clientMessage]);
    }, 1000);
  };

  const handleTyping = () => {
    if (selectedChat && selectedChat.userId) {
      socket.emit("typing", selectedChat.userId);
      setTimeout(() => {
        socket.emit("stop_typing", selectedChat.userId);
      }, 2000);
    }
  };

  if (!selectedChat) {
    return <div className="profile-main-chat" style={{ color: "#888" }}>
      <div className="profile-chat-blank">
      <p>
        Select a chat to start messaging
      </p>
      </div>
    </div>;
  }
  return (
    <div className="profile-main-chat">
      <div className="profile-chat-header-main">
        <div className="chats-main-header">
          <div className="profile-chat-image">
            {selectedChat.profileImage ? (
              <Image src={selectedChat.profileImage} alt={selectedChat.name} width={50} height={50} />
            ) : (
              <div className="default-profile-image">
                <i className="bi bi-person" />
              </div>
            )}
          </div>
          <div className="chat-name-header">
            <h3>{selectedChat.name}</h3>
          </div>
        </div>
        <div className="call-videocall">
          <div className="call-vc-icon" title="Audio Call">
            <i className="bi bi-telephone" />
          </div>
          <div className="call-vc-icon" title="Video Call">
            <i className="bi bi-camera-video" />
          </div>
        </div>
      </div>
      <div className="profile-chat-messages-main">
        <div className="messages-container" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "10px" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                alignSelf: msg.fromUser ? "flex-end" : "flex-start",
                backgroundColor: msg.fromUser ? "#DCF8C6" : "#FFFFFF",
                color: "#000",
                padding: "3px 10px",
                borderRadius: "0px 10px 10px 10px",
                maxWidth: "70%",
                boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
                wordBreak: "break-word"
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>{msg.fromUser ? "" : ""}</strong> {msg.text}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div style={{ position: "relative" }}>
        {showEmojiPicker && (
          <div style={{ position: "absolute", bottom: "60px", zIndex: 1000 }}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <div className="chat-inputs">
          <button className="chats-buttons" onClick={() => setShowEmojiPicker(!showEmojiPicker)} title="Emoji">
            <i className="bi bi-emoji-smile" />
          </button>

          <button className="chats-buttons" onClick={() => fileInputRef.current.click()} title="Upload Image">
            <i className="bi bi-camera" />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload}
          />

          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSendMessage();
              }
            }}
            onKeyUp={handleTyping}
            placeholder="Type a message..."
            className="chat-input"
          />
          <button onClick={onSendMessage} className="login-btn">
            <i className="bi bi-send" />
          </button>
        </div>

        {typingUser && <div className="typing-indicator">{typingUser}</div>}
      </div>
    </div>
  );
};

export default ChatWindow;
