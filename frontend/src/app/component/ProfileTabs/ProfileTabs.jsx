'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import './profiletabs.css';

import MyProfile from '../MyProfile/MyProfile';
import NotificationsPage from '@/app/pages/notifications/page';
import ProfileSetting from '../ProfileSetting/ProfileSetting';
import ChatingPage from '../Chating/ChatingPage';
import Friendlist from '../Friendlist/Friendlist';
import ConnectedFriends from '../ConnectedFriends/ConnectedFriends';
import Wishlist from '../Wishlist/Wishlist';
import MyPlan from '../MyPlan/MyPlan';

const ProfileTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = searchParams.get('tab') || 'my-profile';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    // Update URL when tab changes
    router.replace(`?tab=${activeTab}`);
  }, [activeTab, router]);

  const renderContent = () => {
    switch (activeTab) {
      case 'my-profile':
        return <MyProfile />;
      case 'friend list':
        return (
          <>
            <Friendlist/>
          </>
        );

      case 'connected-friends':
        return(
          <>
          <ConnectedFriends/>
          </>
        );  
      case 'message':
        return (
          <>
            <ChatingPage />
          </>
        );

        case 'Wishlist':
          return (
            <>
              <Wishlist/>
            </>
          );

        
      case 'MyPlan':
        return(
          <>
          <MyPlan/>
          </>
        );  

      case 'notification':
        return <NotificationsPage />;
      case 'users':
        return (
          <>
            <h5 className="card-title">Users</h5>
            <p className="card-text">Update your password and manage your users message here.</p>
          </>
        );
      case 'setting':
        return <ProfileSetting />;
      default:
        return null;
    }
  };

  return (
    <section className='profile-tabs-section'>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3"> 
            <div className='profile-tabs-bg'>
              <div className="list-group">
                {[
                  { key: 'my-profile', label: 'My Profile', icon: 'bi-person-circle' },
                  { key: 'friend list', label: 'Friend List', icon: 'bi-list' },
                  { key: 'connected-friends', label: 'My Booking', icon: 'bi-people-fill' },
                  { key: 'message', label: 'Message', icon: 'bi-chat-left-text' },
                  { key: 'Wishlist', label: 'Wishlist', icon: 'bi bi-heart-fill' },
                  { key: 'notification', label: 'Notification', icon: 'bi-bell-fill' },
                  { key: 'MyPlan', label: 'MyPlan', icon: 'bi-bell-fill' },
                  { key: 'users', label: 'Users', icon: 'bi-person-lines-fill' },
                  { key: 'setting', label: 'Setting', icon: 'bi-gear-fill' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    className={`list-group-item list-group-item-action ${activeTab === tab.key ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    <i className={`bi ${tab.icon}`}></i> <span className='tab-btn-name'>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-md-9">
            <div className='table-content-overflow'>{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTabs;
