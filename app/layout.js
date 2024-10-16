// Import necessary packages
import Link from 'next/link'; // Add this line to import the Link component
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Popup from "@/components/popup/Popup";
import "@css/dark.css";
import "@css/custom.css";
import "@css/plugins.css";
import "@css/style.css";

import { Montserrat, Mulish, Poppins } from "next/font/google";
import "./globals.css";
import State from "/context/context";

/** Meta data */
export const metadata = {
  title: "Dr Vimal Kumar G - MGM Healthcare | Best Super-MultiSpecialty Hospital in Chennai",
  description: "Explore Dr. Vimal Kumar's expertise in childhood cancers, blood disorders, BMT, immune deficiencies, cellular therapies, training, and publications.",
};

/** Google fonts */
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

/** Font family */
const fontFamily = `${mulish.variable} ${poppins.variable} ${montserrat.variable}`;

/** Layout function */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontFamily}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/img/logo/favicon.png" />
      </head>
      <body>
        <div className="iknow_tm_all_wrap" data-magic-cursor="show">
          <State>
            <Preloader />
            <Popup />
            {/* <nav className="main-nav">
              <ul className="menu-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav> */}
            {children}
          </State>
          <Cursor />
        </div>
      </body>
    </html>
  );
}
