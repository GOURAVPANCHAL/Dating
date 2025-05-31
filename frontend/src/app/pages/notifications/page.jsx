"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pic1 from "@/app/Images/angellovebaby.png"
import {
  Bell, Heart, MessageCircle, MapPin, Star,
  X, CheckCircle, Trash2, Eye, Gift, Clock
} from 'lucide-react';
import { useRouter } from 'next/navigation';
// import axios from 'axios';
import './NotificationsPage.css';
import Image from 'next/image';

const NOTIFICATION_TYPES = {
  LIKE: 'like',
  MESSAGE: 'message',
  SUPERLIKE: 'superlike',
  LOCATION: 'location',
  MATCH: 'match',
  PROFILE_VIEW: 'profile_view',
  GIFT: 'gift'
};

const generateMockNotifications = () => {
  const now = new Date();
  const users = [
    {
      id: 101,
      name: 'Anna',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      age: 28,
      location: '2 miles away',
      bio: 'Artist and dog lover'
    },
    {
      id: 102,
      name: 'Jake',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      age: 31,
      location: '5 miles away',
      bio: 'Software engineer who loves hiking'
    },
    {
      id: 103,
      name: 'Mia',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      age: 24,
      location: '1 mile away',
      bio: 'Medical student and coffee enthusiast'
    },
    {
      id: 104,
      name: 'Alex',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      age: 29,
      location: '10 miles away',
      bio: 'Professional chef and traveler'
    },
    {
      id: 105,
      name: 'Sophia',
      avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
      age: 26,
      location: '3 miles away',
      bio: 'Yoga instructor and bookworm'
    }
  ];
  const getRandomTime = (minutesAgo) => {
    const date = new Date(now.getTime() - minutesAgo * 60000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const timeAgo = (minutes) => {
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return [
    {
      id: 1,
      type: NOTIFICATION_TYPES.LIKE,
      name: users[0].name,
      avatar: users[0].avatar,
      message: `${users[0].name} (${users[0].age}) liked your profile`,
      time: timeAgo(2),
      timestamp: getRandomTime(2),
      isRead: false,
      metadata: {
        userId: users[0].id,
        userLocation: users[0].location,
        userBio: users[0].bio
      }
    },
    {
      id: 2,
      type: NOTIFICATION_TYPES.MESSAGE,
      name: users[1].name,
      avatar: users[1].avatar,
      message: `${users[1].name}: "Hey there! How are you doing today?"`,
      time: timeAgo(10),
      timestamp: getRandomTime(10),
      isRead: false,
      metadata: {
        userId: users[1].id,
        messageId: 'msg_001',
        preview: 'Hey there! How are you doing today?',
        unreadMessages: 3
      }
    },
    {
      id: 3,
      type: NOTIFICATION_TYPES.SUPERLIKE,
      name: users[2].name,
      avatar: users[2].avatar,
      message: `${users[2].name} super liked you! ❤️`,
      time: timeAgo(60),
      timestamp: getRandomTime(60),
      isRead: true,
      metadata: {
        userId: users[2].id,
        superlikeType: 'rose',
        message: "I'd love to get to know you better!"
      }
    },
    {
      id: 4,
      type: NOTIFICATION_TYPES.LOCATION,
      name: 'Nearby',
      avatar: 'https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13&size=200x200&maptype=roadmap',
      message: '3 new users within 5 miles of you',
      time: timeAgo(120),
      timestamp: getRandomTime(120),
      isRead: true,
      metadata: {
        count: 3,
        radius: '5 miles',
        users: [users[3], users[4]]
      }
    },
    {
      id: 5,
      type: NOTIFICATION_TYPES.MATCH,
      name: users[4].name,
      avatar: users[4].avatar,
      message: `It's a match! You and ${users[4].name} liked each other`,
      time: timeAgo(180),
      timestamp: getRandomTime(180),
      isRead: false,
      metadata: {
        userId: users[4].id,
        matchId: 'match_001',
        matchedAt: new Date().toISOString(),
        mutualInterests: ['Yoga', 'Reading']
      }
    },
    {
      id: 6,
      type: NOTIFICATION_TYPES.PROFILE_VIEW,
      name: users[3].name,
      avatar: users[3].avatar,
      message: `${users[3].name} viewed your profile`,
      time: timeAgo(240),
      timestamp: getRandomTime(240),
      isRead: true,
      metadata: {
        userId: users[3].id,
        viewedAt: new Date().toISOString(),
        viewCount: 2
      }
    },
    {
      id: 7,
      type: NOTIFICATION_TYPES.GIFT,
      name: 'Premium Gift',
      avatar: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png',
      message: `You received a rose from ${users[1].name}`,
      time: timeAgo(300),
      timestamp: getRandomTime(300),
      isRead: false,
      metadata: {
        fromUserId: users[1].id,
        giftType: 'rose',
        giftId: 'gift_001',
        message: "You seem special, let's connect!"
      }
    }
  ];
};

const NotificationItem = ({
  notification,
  onMarkAsRead,
  onNavigate
}) => {
  const {
    id,
    type,
    name,
    avatar,
    message,
    time,
    isRead,
    metadata
  } = notification;

  const iconMap = {
    [NOTIFICATION_TYPES.LIKE]: <Heart className="icon-like" size={20} />,
    [NOTIFICATION_TYPES.MESSAGE]: <MessageCircle className="icon-message" size={20} />,
    [NOTIFICATION_TYPES.SUPERLIKE]: <Star className="icon-superlike" size={20} fill="currentColor" />,
    [NOTIFICATION_TYPES.LOCATION]: <MapPin className="icon-location" size={20} />,
    [NOTIFICATION_TYPES.MATCH]: <Heart className="icon-match" size={20} fill="currentColor" />,
    [NOTIFICATION_TYPES.PROFILE_VIEW]: <Eye className="icon-view" size={20} />,
    [NOTIFICATION_TYPES.GIFT]: <Gift className="icon-gift" size={20} />
  };

  const handleClick = () => {
    if (!isRead) {
      onMarkAsRead(id);
    }
    onNavigate(type, metadata);
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    onMarkAsRead(id, true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`notification-item ${!isRead ? 'unread' : ''}`}
      onClick={handleClick}
    >
      {avatar ? (
        <img src={avatar} alt={name} className="notification-avatar" />
      ) : (
        <div className="notification-icon">
          {iconMap[type] || <Bell className="text-secondary" size={20} />}
        </div>
      )}

      <div className="notification-content">
        <p className="notification-message">{message}</p>
        <div className="notification-time">
          <Clock size={14} className="me-1" />
          {time}
        </div>
      </div>

      <div className="notification-actions">
        {!isRead && <div className="unread-badge"></div>}
        <button
          onClick={handleDismiss}
          className="notification-action-btn"
          aria-label="Dismiss notification"
        >
          <X size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default function NotificationsPage(){
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        const mockData = generateMockNotifications();
        setNotifications(mockData);
        setHasUnread(mockData.some(n => !n.isRead));
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();

    // Simulate real-time notifications
    const interval = setInterval(() => {
      const randomTypes = Object.values(NOTIFICATION_TYPES);
      const randomType = randomTypes[Math.floor(Math.random() * randomTypes.length)];
      const randomUser = generateMockNotifications()[0].metadata.userId;

      const newNotification = {
        id: Math.floor(Math.random() * 10000),
        type: randomType,
        name: `User${Math.floor(Math.random() * 100)}`,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
        message: `New ${randomType.replace('_', ' ')} activity`,
        time: 'Just now',
        isRead: false,
        metadata: { userId: randomUser }
      };

      setNotifications(prev => [newNotification, ...prev]);
      setHasUnread(true);
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.isRead;
    return notification.type === activeTab;
  });

  const handleMarkAsRead = async (id, dismiss = false) => {
    try {
      setNotifications(prev =>
        dismiss
          ? prev.filter(n => n.id !== id)
          : prev.map(n => n.id === id ? { ...n, isRead: true } : n)
      );
      setHasUnread(notifications.some(n => !n.isRead && n.id !== id));
    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

  const handleClearAll = async () => {
    try {
      setNotifications([]);
      setHasUnread(false);
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
  };

  const handleNavigate = (type, metadata) => {
    const routes = {
      [NOTIFICATION_TYPES.MESSAGE]: `/messages/${metadata.userId}`,
      [NOTIFICATION_TYPES.LIKE]: `/profile/${metadata.userId}`,
      [NOTIFICATION_TYPES.SUPERLIKE]: `/profile/${metadata.userId}`,
      [NOTIFICATION_TYPES.PROFILE_VIEW]: `/profile/${metadata.userId}`,
      [NOTIFICATION_TYPES.MATCH]: `/matches/${metadata.matchId}`,
      [NOTIFICATION_TYPES.LOCATION]: '/discover?filter=nearby',
      [NOTIFICATION_TYPES.GIFT]: `/gifts/${metadata.giftId}`
    };

    router.push(routes[type] || '/notifications');
  };

  const handleMarkAllAsRead = async () => {
    try {
      setNotifications(prev =>
        prev.map(n => ({ ...n, isRead: true }))
      );
      setHasUnread(false);
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  return (
    <div className="notifications-container">
      <div className="notifications-card">
        <div className="notifications-header">

          <div className="d-flex justify-content-between align-items-center">
            <h1>
              <Bell size={24} />
              Notifications
              {hasUnread && (
                <span className="notification-count-badge">
                  {notifications.filter(n => !n.isRead).length} New
                </span>
              )}
            </h1>
            <div className="notification-tabs">
              <button
                className={`notification-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
              <button
                className={`notification-tab ${activeTab === 'unread' ? 'active' : ''}`}
                onClick={() => setActiveTab('unread')}
              >
                Unread
              </button>
              <button
                className={`notification-tab ${activeTab === 'message' ? 'active' : ''}`}
                onClick={() => setActiveTab('message')}
              >
                Messages
              </button>
              <button
                className={`notification-tab ${activeTab === 'like' ? 'active' : ''}`}
                onClick={() => setActiveTab('like')}
              >
                Likes
              </button>
            </div>
            <div className="notification-actions">
              {hasUnread && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="notification-action-btn primary"
                  title="Mark all as read"
                >
                  <CheckCircle size={18} />
                </button>
              )}
              <button
                onClick={handleClearAll}
                className="notification-action-btn"
                disabled={notifications.length === 0}
                title="Clear all notifications"
              >
                <Trash2 size={18} />
              </button>
            </div> 
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading your notifications...</p>
          </div>
        ) : (
          <div className="notifications-list">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((note) => (
                <NotificationItem
                  key={note.id}
                  notification={note}
                  onMarkAsRead={handleMarkAsRead}
                  onNavigate={handleNavigate}
                />
              ))      
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <Bell size={36} />
                </div>
                <h3>
                  {activeTab === 'unread'
                    ? "You're all caught up!"
                    : "No notifications yet"}
                </h3>
                <p>
                  {activeTab === 'unread'
                    ? "You've read all your notifications"
                    : "New notifications will appear here"}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => router.push('/discover')}
                >
                  Discover People
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}






