"use client";
import React from 'react';
import './contact.css';
import location1 from "../../Images/contact1.png";
import location2 from "../../Images/contact2.png";
import location3 from "../../Images/contact3.png";
import Image from 'next/image';
import Link from 'next/link';

const ContactPage = () => {
    const arr = [
        {
            city: 'Las Vegas',
            address: '3164 Delaware RD Milan, Indiana(IN), 47031',
            phone: '+1-844-200-099 25',
            email: 'no-reply@modtheme.com',
            picture: location1,
            open: "Open: 8:00AM - Close: 6:00PM",
            day: "Saturday - Sunday: Close"
        },
        {
            city: 'Los Angeles',
            address: '3164 Delaware RD Milan, Indiana(IN), 47031',
            phone: '+1-844-200-099 25',
            email: 'no-reply@modtheme.com',
            picture: location2,
            open: "Open: 8:00AM - Close: 6:00PM",
            day: "Saturday - Sunday: Close"
        },
        {
            city: 'New York',
            address: '3164 Delaware RD Milan, Indiana(IN), 47031',
            phone: '+1-844-200-099 25',
            email: 'no-reply@modtheme.com',
            picture: location3,
            open: "Open: 8:00AM - Close: 6:00PM",
            day: "Saturday - Sunday: Close"
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission
        alert("Form submitted!");
    };

    return (
        <>
         <section className='breadcrumb-all'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center m-0 gap-2">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <i className="bi bi-heart"></i>
                                    <li className="breadcrumb-item active" aria-current="page">Subscriptions</li>
                                </ol>
                            </nav>
                            <h1 className='text-center'>COntact Us</h1>
                            {/* <p className='text-center'>Choose the plan that suits you best</p> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-sec">
                <div className="container">
                    <div className="row">
                        {arr.map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card border-0">
                                    <div className="card-body p-0">
                                        <Image src={item.picture} className="card-img-top" alt="Location" width={500} height={300} />
                                        <h5 className="contact-card-title">{item.city}</h5>
                                        <p className="contact-card-text">{item.address}</p>
                                        <p className="contact-card-text">Hotline: {item.phone}</p>
                                        <p className="contact-card-text">{item.email}</p>
                                        <h5 className="contact-card-title">Contact Information</h5>
                                        <p className="contact-card-text">{item.open}</p>
                                        <p className="contact-card-text">{item.day}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='contact-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='contact-from-main'>
                                <h1>
                                    Do you have any <span className='mt-underline-text curved text-dark'>Questions?</span>
                                </h1>
                                <p>
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className='contact-form-div'>
                                        <input type='text' className='form-control' placeholder='Name*' required />
                                        <input type='email' className='form-control' placeholder='Email*' required />
                                        <input type='text' className='form-control' placeholder='Subject*' required />
                                    </div>
                                    <div>
                                        <textarea className='form-control contact-textarea' placeholder='Your Message*' required />
                                    </div>
                                    <div className='text-center'>
                                    <button type="submit" className="login-btn w-100 mt-3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.624309212272!2d77.08410077429787!3d28.730771579614938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1747309899100!5m2!1sen!2sin"
                                style={{ border: '0', width: '100%', height: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
