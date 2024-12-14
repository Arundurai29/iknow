"use client";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { useState, useEffect } from 'react';

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Separate states for each dropdown
  const [openDoctorsMenu, setOpenDoctorsMenu] = useState(false);
  const [openTreatmentsMenu, setOpenTreatmentsMenu] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isScrolled ? 'white' : 'transparent',
        transition: 'background-color 0.3s',
      }}
      className="iknow_tm_topbar"
      data-position="absolute"
    >
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="/">
              {darkLogo ? (
                <img src="/img/logo/logo.png" alt="logo" />
              ) : (
                <img src="/img/logo/logo.png" alt="logo" />
              )}
            </a>

            <nav className="navbar">
              <div className="container dum-con">
                <button className="hamburger" onClick={toggleMobileMenu}>
                  ☰
                </button>

                <div className={`menu-items ${mobileMenuOpen ? 'menu-items-open' : ''}`}>
                  <Link href="/" className="link">Home</Link>
                  
                  {/* Doctors Dropdown */}
                  <div
                    className="dropdown"
                    onMouseEnter={() => setOpenDoctorsMenu(true)}
                    onMouseLeave={() => setOpenDoctorsMenu(false)}
                  >
                    <button style={{ fontSize: 17 }} className="dropdown-button">
                      Doctors
                    </button>
                    {openDoctorsMenu && (
                      <div className="dropdown-menu">
                        <Link href="/vimal" className="dropdown-item">Dr Vimal Kumar G</Link>
                        <Link href="/deena" className="dropdown-item">Dr. M. Deenadayalan</Link>
                        <Link href="/rishab" className="dropdown-item">Dr. Rishab Bharadwaj</Link>
                      </div>
                    )}
                  </div>

                  {/* Treatments Dropdown */}
                  <div
                    className="dropdown"
                    onMouseEnter={() => setOpenTreatmentsMenu(true)}
                    onMouseLeave={() => setOpenTreatmentsMenu(false)}
                  >
                    <button style={{ fontSize: 17 }} className="dropdown-button">
                      Treatments
                    </button>
                    {openTreatmentsMenu && (
                      <div className="dropdown-menu">
                        <Link href="/treatment/anaemia" className="dropdown-item">Anaemia</Link>
                        <Link href="/treatment/immune" className="dropdown-item">Immune</Link>
                      </div>
                    )}
                  </div>

                  <Link href="/articles" className="link">Articles</Link>
                  <Link href="/contact" className="link">Contact Us</Link>
                </div>
              </div>
            </nav>
          </div>
          <div className="right">
            {/* {topbarIcon && <SocialIcons />} */}
            <div className="iknow_tm_button">
              <a href="#" download>
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
