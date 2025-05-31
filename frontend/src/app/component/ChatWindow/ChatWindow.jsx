import { useState, useEffect, useRef } from "react";
import socket from "../../utils/socket";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";

const ChatWindow = ({ selectedChat, newMessage, setNewMessage, handleSendMessage, userId }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [typingUser, setTypingUser] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Emit 'register_user' event to associate userId with socket connection
    if (userId) {
      socket.emit('register_user', userId);
    }

    // Listen for 'private_message' events
    socket.on('private_message', (data) => {
      // Handle incoming private messages
      console.log('Private message received:', data);
    });

    // Listen for 'typing' events
    socket.on('typing', (typingUserId) => {
      setTypingUser(`${typingUserId} is typing...`);
    });

    // Listen for 'stop_typing' events
    socket.on('stop_typing', () => {
      setTypingUser('');
    });

    // Cleanup event listeners on component unmount
    return () => {
      socket.off('private_message');
      socket.off('typing');
      socket.off('stop_typing');
    };
  }, [userId]);

  const handleEmojiClick = (emojiData) => {
    setNewMessage((prev) => prev + emojiData.emoji);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected image: ${file.name}`);
    }
  };

  const onSendMessage = () => {
    setShowEmojiPicker(false);
    handleSendMessage();
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
    return <div className="profile-main-chat" style={{ color: "#888" }}>Select a chat to start messaging</div>;
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
        <div className="messages-container">
          {selectedChat.messages.map((msg, index) => (
            <div key={index} className="single-message">
              <p className="m-0">{msg}</p>
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
