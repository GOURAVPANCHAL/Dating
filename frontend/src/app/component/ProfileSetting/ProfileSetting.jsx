import React, { useState } from 'react';
import './ProfileSetting.css';
import image1 from "../../Images/user/user1.jpeg";
import Image from 'next/image';
import Link from 'next/link';

const ProfileSetting = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(image1); // fallback image
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 15 * 1024 * 1024) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        } else {
            alert("File is too large. Please choose a file under 15MB.");
        }
    };

    const handleImageDelete = () => {
        setImage(null);
        setPreview(image1); // Reset to default imported image
    };

    return (
        <>
            <section className='profile-setting'>
                <div className='profile-setting-main'>
                    <h5 className="font-semibold">Account Setting</h5>
                    <p>Real-time information and activities of your property.</p>
                    <hr />

                    <div className="setting-image-header">
                        <div className='setting-heading-1'>
                            <Image
                                src={preview}
                                alt="Profile"
                                className="rounded-circle"
                                width="80"
                                height="80"
                                style={{ objectFit: 'cover' }}
                            />
                            <div>
                                <p className="m-0">Profile picture</p>
                                <p className="text-muted m-0" style={{ fontSize: '14px' }}>PNG, JPEG under 15MB</p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 mt-2">
                            <label className="upgradebtn">
                                Upload new picture <i className="bi bi-cloud-upload"></i>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleImageChange}
                                    hidden
                                />
                            </label>
                            <button className="deletebtn" onClick={handleImageDelete}>
                                Delete <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div className='profile-edit-bio'>
                        <form action="">
                            <div className="row">
                                <div className="col-md-4">
                                    <div>
                                        <div className="profile-form-field">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" placeholder='Enter your name' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <div className="profile-form-field">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" placeholder='Enter your last name' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <div className="profile-form-field">
                                            <label htmlFor="">Bio</label>
                                            <input type="text" placeholder='Write something about you' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <div className="profile-form-field">
                                            <label htmlFor="">Contact Email</label>
                                            <p>Manage your accounts email address for the invoices.</p>
                                            <input type="email" placeholder='Enter your email' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="profile-form-field">
                                        <label>Password</label>
                                        <p>Modify Your Current Password.</p>
                                        <span>Current Password</span>
                                        <div className="password-wrapper">
                                            <input
                                                type={showCurrentPassword ? 'text' : 'password'}
                                                placeholder="Enter your current password"
                                            />
                                            <i
                                                className={`bi ${showCurrentPassword ? 'bi-eye-slash' : 'bi-eye'} toggle-icon`}
                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                            ></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="profile-form-field">
                                        <span>New Password</span>
                                        <div className="password-wrapper">
                                            <input
                                                type={showNewPassword ? 'text' : 'password'}
                                                placeholder="Enter your new password"
                                            />
                                            <i
                                                className={`bi ${showNewPassword ? 'bi-eye-slash' : 'bi-eye'} toggle-icon`}
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button className='upgradebtn'>Apply changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='delete-acc'>
                        <h5 className="font-semibold">Delete Account</h5>
                        <p>This account contain 1388 posts. Deleting your account will
                            remove all the content associated with it.
                            Would you like to delete your account?  </p>
                        <Link href={"/"}>I want to delete my account</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileSetting;
