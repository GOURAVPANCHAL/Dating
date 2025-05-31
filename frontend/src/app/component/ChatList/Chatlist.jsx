import React from 'react';
import Image from 'next/image';
const ChatList = ({ chatList, selectedChatId, setSelectedChatId }) => {
    return (
        <div className='all-chats-side'>
            <div className='all-chats-header'>
                <h3>Chats</h3>
                <div className='all-chat-search'>
                    <input type='search' placeholder='Search...' />
                    <i className='bi bi-search'></i>
                </div>
            </div>

            {chatList.map(chat => (
                <div
                    key={chat.id}
                    onClick={() => setSelectedChatId(chat.id)}
                    className='chats-list'
                    style={{ backgroundColor: selectedChatId === chat.id ? '#f0f0f0' : 'transparent' }}
                >
                    <div className='profile-chat-list'>
                        <div className='profile-chat-image'>
                            {chat.profileImage ? (
                                <Image src={chat.profileImage} alt={chat.name} width={50} height={50} />
                            ) : (
                                <div className='default-profile-image'>
                                    <i className='bi bi-person' />
                                </div>
                            )}
                        </div>
                        <div className='chat-name'>
                            <p>{chat.name}</p>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>
                                <b>
                                    {(() => {
                                        const lastMessage = chat.messages?.[chat.messages.length - 1] || '';
                                        const words = lastMessage.split(/\s+/).filter(Boolean);
                                        return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : lastMessage;
                                    })()}
                                </b>
                            </p>

                        </div>
                    </div>
                    <div className='chat-times-number'>
                        <p>{chat.timing}</p>
                        <p className='chat-number'>{chat.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
