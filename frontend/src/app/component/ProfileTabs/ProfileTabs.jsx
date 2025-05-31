'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import './profiletabs.css';

import MyProfile from '../MyProfile/MyProfile';
import NotificationsPage from '@/app/pages/notifications/page';
import ProfileSetting from '../ProfileSetting/ProfileSetting';
import ChatingPage from '../Chating/ChatingPage';

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
      case 'go-live':
        return (
          <>
            <h5 className="card-title">Go Live Profile</h5>
            <p className="card-text">You can go-live your personal details and information here.</p>
          </>
        );
      case 'message':
        return (
          <>
           <ChatingPage />
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
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 mb-3">
            <div className='profile-tabs-bg'>
            <div className="list-group">
              {[
                { key: 'my-profile', label: 'My Profile', icon: 'bi-person' },
                { key: 'go-live', label: 'Go Live', icon: 'bi-play' },
                { key: 'message', label: 'Message', icon: 'bi-chat-dots' },
                { key: 'notification', label: 'Notification', icon: 'bi-chat-dots' },
                { key: 'users', label: 'Users', icon: 'bi-people' },
                { key: 'setting', label: 'Setting', icon: 'bi-gear-wide-connected' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`list-group-item list-group-item-action ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <i className={`bi ${tab.icon}`}></i> {tab.label}
                </button>
              ))}
            </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-md-9">
            <div>{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTabs;
