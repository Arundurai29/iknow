"use client";
import CopyRightText from "@/components/CopyRightText";
import TopBar from "@/components/TopBar";
import Rishab from "@/components/hero/Rishab";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { shapes1 } from "@/utility/shapes";
import { Fragment, useContext, useEffect, useState } from "react";

const RishabLayout = ({ darkLogo }) => {
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
    iKnowUtilits.menuHoverEffect();
  }, []);

  const [activeNav, setActiveNav] = useState(null);
  const { pageContent3,menus3 } = useContext(context);
  const [copyRightClass, setCopyRightClass] = useState("hidden");
  return (
    <Fragment>
      <TopBar darkLogo={darkLogo} />
      {/* Deena Hero */}
      <Rishab
        shapes1={shapes1}
        menus={menus3}
        setActiveNav={setActiveNav}
        activeNav={activeNav}
        setCopyRightClass={setCopyRightClass}
      />
      {/* Content */}
      <div className="container">
        <div
          className={`iknow_tm_mainpart ${activeNav !== null ? "opened" : ""}`}
        >
          {pageContent3.map((content) => (
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
      <CopyRightText extraCls={copyRightClass} />
    </Fragment>
  );
};
export default RishabLayout;
