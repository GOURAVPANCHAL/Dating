"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from "../../Images/Group 9.png"
import mermberImage from "../../Images/explore-lmage.png"
import ProfileImage from "../../Images/people1.png"
import thundar from "../../Images/thunder.gif"
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
      label: "Explore",
      href: "/about",
      isDropdown: true,
      dropdown: [
        {
          title: "Menu",
          links: [
            { label: "About Us", href: "/pages/about-us" },
            { label: "Privacy & Safety", href: "/pages/policies" },
            { label: "Purpose", href: "/pages/purpose" },
            { label: "FAQ", href: "/pages/faq" },
            { label: "", href: "/pages/payment-section" },
            // { label: "Community Activity", href: "/pages/create-account/step/page" },
            // { label: "Single Group", href: "/about" },
          
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
        { label: "VIP Membership", href: "/services/vip-membership" },
        { label: "Dating Events", href: "/services/events" },

      ],
      

        },
        {
          title: "",
          image: mermberImage,
          href: "/pages/about-us"
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
        <div className="container ">
          <nav className="navbar ">
            <div className="desktop row align-items-center w-100">
              <div className="col-md-2 d-flex align-items-center">
                <div className="nav-logo">
                  <Link href="/">
                    <Image src={logo} width={200} className='logoimg' height={"auto"} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-7">
                <div className="nav-menu-header">
                  <ul className="nav-menu-ul ">
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
              <div className="col-md-3 text-end d-flex">
              <div className='profile-image-nav d-flex'>
                        <div>
                            <Link href={"/pages/profile"} className='text-decoration-none'>
                                <Image src={ProfileImage} alt='profile-image' />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/pages/subscriptions"}>
                            <Image src={thundar} alt='notification' className='notification-icon' />
                            </Link>
                        </div>
                    </div> 
                <Link href="/pages/login" className="RegisterBtn">Log In / Register</Link>
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
      </div>
    </>



  )
}

export default Header
