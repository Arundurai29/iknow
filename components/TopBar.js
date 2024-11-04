"use client";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { useState } from 'react';

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="iknow_tm_topbar" data-position="absolute">
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="#">
              {darkLogo ? (
                <img src="/img/logo/logo.png" alt="logo" />
              ) : (
                <img src="/img/logo/logo.png" alt="logo" />
              )}
            </a>
            <nav className="navbar">
   
      <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/vimal">Dr Vimal Kumar G</Link>
        </li>
        <li>
          <Link href="/article">Articles </Link>
        </li>
      
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
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
