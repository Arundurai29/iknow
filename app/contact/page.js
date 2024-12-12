"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import Link from "next/link";
import styles from "../../public/css/post.css";
import TopBar from "@/components/TopBar";
export default async function Contact({ searchParams }) {
  const infos = [
    {
      id: 1,
      icon: "letter",
      title: "Email Us",
      value: '<a href="#">drgvimal@gmail.com</a>',
    },
    {
      id: 2,
      icon: "placeholder",
      title: "Address",
      value: "MGM Cancer Institute : MGM Cancer Institute, Nelson Manickam Road, Rajeswari St, Rajaram Mehta Nagar, Aminjikarai, Chennai, Tamil Nadu 600029",
    },
  ];

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({
              name: "",
              email: "",
              message: "",
              phone: "",
              subject: "",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };


  return (
    <>
      <TopBar />
      <div className="post_banner">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container">
      <div className="iknow_tm_contact">
        <div className="iknow_tm_main_title">

          <h3>Contact me to get your work done</h3>
        </div>
        <div className="wrapper">
          <div className="left">
            <ul>
              {infos.map((info) => (
                <li key={info.id}>
                  <div className="list_inner">
                    <span className="icon">
                      <img
                        className="svg"
                        src={`/img/svg/${info.icon}.svg`}
                        alt="image"
                      />
                    </span>
                    <div className="short">
                      <h3>{info.title}</h3>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: info.value,
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <div className="fields">
              <form
                className="contact_form"
                autoComplete="off"
                onSubmit={(e) => onSubmit(e)}
              >
                <div
                  className={error ? "empty_notice" : "returnmessage"}
                  style={{ display: error == null ? "none" : "block" }}
                >
                  <span>
                    {error
                      ? "Please Fill Required Fields"
                      : "Your message has been received, We will contact you soon."}
                  </span>
                </div>
                <div className="input_list">
                  <ul>
                    <li>
                      <input
                        id="name"
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        type="text"
                        placeholder="Your Name"
                      />
                    </li>
                    <li>
                      <input
                        id="email"
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        type="text"
                        placeholder="Your Email"
                      />
                    </li>
                    <li>
                      <input
                        id="phone"
                        name="phone"
                        onChange={(e) => onChange(e)}
                        value={phone}
                        type="number"
                        placeholder="Your Phone"
                      />
                    </li>
                    <li>
                      <input
                        id="subject"
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        type="text"
                        placeholder="Subject"
                      />
                    </li>
                  </ul>
                </div>
                <div className="message_area">
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => onChange(e)}
                    value={message}
                    placeholder="Your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="iknow_tm_button">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      onSubmit(e);
                    }}
                    id="send_message"
                    href="#"
                  >
                    Submit Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* CopyRightText and other sections */}
      <div
        className="iknow_tm_copyright"
        style={{ paddingTop: 40, paddingBottom: 40, borderTop:1, }}
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
                <Link href="/contact" className="footer-item">Contact Us </Link>
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
                Copyright © PHOchennai. All Rights Reserved.
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
    </>
  );
}
