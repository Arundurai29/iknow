"use client";
import CopyRightText from "@/components/CopyRightText";
import TopBar from "@/components/TopBar";
import Deena from "@/components/hero/Deena";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes1 } from "@/utility/shapes";
import { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";

const DeenaLayout = ({ darkLogo }) => {
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
    iKnowUtilits.menuHoverEffect();
  }, []);
  
  const { pageContent1,menus1 } = useContext(context);

  const [activeNav, setActiveNav] = useState(pageContent1[0]?.sectionId || null);
  const [copyRightClass, setCopyRightClass] = useState("hidden");
  return (
    <Fragment>
      <TopBar darkLogo={darkLogo} />
      {/* Deena Hero */}
      <Deena
        shapes1={shapes1}
        menus={menus1}
        setActiveNav={setActiveNav}
        activeNav={activeNav}
        setCopyRightClass={setCopyRightClass}
      />
   {/* Content */}
   <div className="container">
        <div
          className={`iknow_tm_mainpart ${activeNav !== null ? "opened" : ""}`}
        >
          {pageContent1.map((content) => (
            <div
              className={`iknow_tm_main_section ${
                content.sectionId === activeNav ? "active" : ""
              }`}
              key={content.id}
            >
              {content.component}
            </div>
          ))}
        </div>
      </div>
       {/* CopyRightText and other sections */}
       <div
        className="iknow_tm_copyright"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        <div className="container">
          <footer className="footer">
            <div className="footer-column">
              <a href="/">

                <img src="/img/logo/logo.png" alt="logo" />


              </a>
              <p>
              Our dedicated team ensures children receive personalized, compassionate care every step of the way.
              </p>
            </div>
            <div className="footer-column">
              <h3>Doctors</h3>
              <ul>
               
                        <Link href="/vimal" className="footer-item">Dr Vimal Kumar G</Link>
                        <Link href="/deena" className="footer-item">Dr. M. Deenadayalan </Link>
                        <Link href="/rishab" className="footer-item">Dr. Rishab Bharadwaj </Link>
                    
                  
              </ul>
            </div>
            <div className="footer-column">
              <h3>Usefull Links</h3>
              <ul>
              <Link href="/" className="footer-item">About Us</Link>
                        <Link href="/articles" className="footer-item">Articles</Link>
                        <Link href="/" className="footer-item">FAQ </Link>
                        <Link href="/" className="footer-item">Contact Us </Link>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:drgvimal@gmail.com">drgvimal@gmail.com</a></li>
                <li>MGM Cancer Institute : MGM Cancer Institute, Nelson Manickam Road, Rajeswari St, Rajaram Mehta Nagar, Aminjikarai, Chennai, Tamil Nadu 600029</li>
            
              </ul>
            </div>
          </footer>
          <div className="inner">
            <div className="left">
              <p>
                Copyright © Dr Vimal Kumar G. All Rights Reserved.
              </p>
            </div>
            <div className="right">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/twitter.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/youtube.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DeenaLayout;
