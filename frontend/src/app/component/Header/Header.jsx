"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from "../../Images/logo.png"
import mermberImage from "../../Images/explore-lmage.png"
import './header.css'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // true if user exists
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Find Match",
      href: "/pages/find-match",
    },
    {
      label: "Community",
      href: "/about",
      isDropdown: true,
      dropdown: [
        {
          title: "Community",
          links: [
            { label: "Community Activity", href: "/pages/create-account/step/page" },
            { label: "Recent Groups", href: "/pages/payment-section" },
            { label: "Single Group", href: "/about" },
            { label: "Members", href: "/pages/purpose" },
            { label: "About Us", href: "/pages/about-us" },
          ]
        },
        {
          title: "Profile",
          links: [
            { label: "Profile Main", href: "/pages/profile" },
            { label: "Media Profile", href: "/about" },
          ]
        },
        {
          title: "Members",
          image: mermberImage,
          href: "/about"
        }
      ]
    },
    {
      label: "Services",
      href: "/services",
      isDropdown: true,
      dropdown: [
        {
          title: "Our Services",
          links: [
        // { label: "Profile Verification", href: "/services/profile-verification" },
        // { label: "Matchmaking", href: "/services/matchmaking" },
        // { label: "Relationship Coaching", href: "/services/relationship-coaching" },
        { label: "Privacy & Safety", href: "/services/privacy-safety" },
        { label: "VIP Membership", href: "/services/vip-membership" },
        { label: "Dating Events", href: "/services/events" },
        { label: "FAQ", href: "/pages/faq" }
      ]
        }
      ]
    },

    {
      label: "Subscriptions",
      href: "/pages/subscriptions"
    },

    {
      label: "Request",
      href: "/pages/friend-requests"
    }
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      <div className="nav-main">
        <div className="container">
          <nav className="navbar">
            <div className="desktop row align-items-center w-100">
              <div className="col-md-2 d-flex align-items-center">
                <div className="nav-logo">
                  <Link href="/">
                    <Image src={logo} width={50} className='logoimg' height={"auto"} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-8">
                <div className="nav-menu-header">
                  <ul className="nav-menu-ul">
                    {navItems.map((item, idx) => (
                      <li key={idx} className={item.isDropdown ? "dropdown-parent" : ""}>
                        <Link href={item.href}>
                          {item.label}
                          {item.isDropdown && <i className="bi bi-chevron-down"></i>}
                        </Link>
                        {item.isDropdown && (
                          <div className="dropdown">
                            <div className="hero-dropdown-content-main">
                              {item.dropdown.map((section, i) => (
                                <div className='hero-dropdown-content' key={i}>
                                  {section.title && <p><b>{section.title}</b></p>}
                                  {section.links && (
                                    <ul>
                                      <li>
                                        {section.links.map((link, j) => (
                                          <Link key={j} href={link.href}>{link.label}</Link>
                                        ))}
                                      </li>
                                    </ul>
                                  )}
                                  {section.image && (
                                    <Link href={section.href}>
                                      <Image style={{ objectFit: "contain" }} src={section.image} width="100" height={100} alt="our member" />
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-2 text-end">
                <Link href="/pages/login" className="login-btn">Log In / Register</Link>
              </div>
            </div>
            <div className='responsive-sidebar'>
              <Image src={logo} className='responsive-sidebarlogo' alt='responsive logo' />
              <div>
                {/* {isLoggedIn ? ( */}
                  <button className="hamburger" onClick={toggleSidebar}>
                    <i className="bi bi-list"></i>
                  </button>
                {/* ) : ( */}
                  {/* // <Link href="/login" className="login-btn-header"> */}
                  {/* //   Login */}
                  {/* // </Link> */}
                {/* )} */}
              </div>
            </div>


            <div className={`nav-sidebar sidebar ${sidebarOpen ? 'open' : ''}`}>
              <div className='sidebar-header-logo-close'>
                <Image src={logo} className='logo' alt='responsive logo' />
                <button className="close-btn" onClick={toggleSidebar}>×</button>
              </div>
              <ul className="sidebar-menu">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <details>
                      <summary>
                        <Link href={item.href} onClick={toggleSidebar}>
                          {item.label}
                        </Link>
                      </summary>
                      {item.isDropdown && (
                        <div className="sidebar-dropdown">
                          {item.dropdown.map((section, i) => (
                            <div key={i}>
                              {section.title && <b>{section.title}</b>}
                              {section.links && (
                                <ul>
                                  {section.links.map((link, j) => (
                                    <li key={j}>
                                      <Link href={link.href} onClick={toggleSidebar}>{link.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {section.image && (
                                <Link href={section.href}>
                                  <Image src={section.image} width={100} height={80} alt="Dropdown" />
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </details>
                  </li>
                ))}
                <li><Link className='upgradebtn text-white' href="/login" onClick={toggleSidebar}>Log In / Register</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="bottom-bar">

        <div>
          <Link href={"/"}>
            <i className="bi bi-house"></i>
          </Link>
        </div>
        <div>
          <Link className='main-icon' href={"/pages/find-match"}>
            <i className="bi bi-search-heart"></i>
          </Link>
        </div>
        <div>
          <Link href={"/pages/notifications"}>
            <i className="bi bi-bell-fill"></i>
          </Link>
        </div>
        <div>
          <Link href={"/pages"}>
            <i className="bi bi-people"></i>
          </Link>
        </div>
        {/* <div>
            <Link href={"#"}>
            
            </Link>
          </div> */}
      </div>
    </>



  )
}

export default Header
