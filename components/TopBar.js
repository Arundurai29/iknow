"use client";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { useState } from 'react';

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="iknow_tm_topbar" data-position="absolute">
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
          <div className="dropdown">
            <button style={{fontSize:18}} onClick={() => toggleMenu('products')} className="dropdown-button">
             Doctors
            </button>
            {openMenu === 'products' && (
              <div className="dropdown-menu">
                <Link href="/vimal" className="dropdown-item">Dr Vimal Kumar G</Link>
                <Link href="/deena" className="dropdown-item">Dr. M. Deenadayalan </Link>
                <Link href="/rishab" className="dropdown-item">Dr. Rishab Bharadwaj </Link>
              </div>
            )}
          </div>
         
          <Link href="/articles" className="link">Articles</Link>
        </div>
      </div>
    </nav>

          </div>
          <div className="right">
            {topbarIcon && <SocialIcons />}
            <div className="iknow_tm_button">
              <a href="#" download>
              Request Appoinment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
