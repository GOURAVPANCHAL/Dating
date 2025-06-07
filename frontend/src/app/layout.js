  'use client';
  import { useState, useEffect } from 'react';
  import { usePathname } from 'next/navigation';
  import './globals.css';
  import Header from './component/Header/Header';
  import Footer from './component/Footer/Footer';
  import Loader from './component/Loader/Loader';
  import ProfileNavbar from './component/ProfileHeader/ProfileHeader'; // Import ProfileNavbar
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Script from 'next/script';

  export default function RootLayout({ children }) {
    const [loader, setLoader] = useState(true);
    const [isVerified, setIsVerified] = useState(null);
    const pathname = usePathname();

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setLoader(false);
    //   }, 2000);
    //   return () => clearTimeout(timer);
    // }, []);

    const handleVerification = (status) => {
      setIsVerified(status);
    };

    // Determine which header to show
    const renderHeader = () => {
      return pathname === '/' ? <Header /> : <ProfileNavbar />;
    };

    return (
      <html lang="en">
        <head />
        <body>
          {/* {loader ? (
            <Loader />
          ) : isVerified === null ? (
            <div className="age-form">
              <div className="age-form-overlay">
                <div className="age-form-main">
                  <h2>Age Verification</h2>
                  <p>You must be <span className="text-danger">18</span> years old to enter.</p>
                  <div className="mt-4">
                    <button className="btn-yes" onClick={() => handleVerification(true)}>
                      Yes
                    </button>
                    <button className="btn-no" onClick={() => handleVerification(false)}>
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : isVerified === true ? ( */}
            <div>
              {renderHeader()}
              {children}
              <Footer />
            </div>
          {/* ) : (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
              <div className="text-center">
                <h2>Access Denied</h2>
                <p>You must be 18 years or older to access this website.</p>
              </div>
            </div>
          )}  */}

          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        </body>
      </html>
    );
  }
