"use client";

const type = {
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  EXPERIENCEMODAL: "EXPERIENCEMODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  TESTIMONIALiTEMS: "TESTIMONIALiTEMS",
  ABOUTDATA: "ABOUTDATA",
};

const {
  MODAL,
  SERVICEMODAL,
  PORTFOLIOMODAL,
  BLOGMODAL,
  TESTIMONIALiTEMS,
  ABOUTDATA,
} = type;

import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Service from "@/components/Service";
import Affiliations from "@/components/Affiliations";
import Faculty from "@/components/Faculty";
import { createContext, useCallback, useReducer } from "react";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    case TESTIMONIALiTEMS:
      return {
        ...state,
        testimonialItems: payload,
      };
    case ABOUTDATA:
      return {
        ...state,
        aboutData: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    modal: false,
    serviceModal: null,
    portfolioModal: null,
    blogModal: null,
    testimonialItems: 2,
    pageContent: [
      { id: 1, sectionId: "about", component: <AboutMe /> },
      { id: 2, sectionId: "resume", component: <Resume /> },
      { id: 3, sectionId: "service", component: <Service /> },
      { id: 4, sectionId: "portfolio", component: <Portfolio /> },
      { id: 5, sectionId: "testimonials", component: <Testimonials /> },
      { id: 6, sectionId: "news", component: <Blog /> },
      { id: 7, sectionId: "contact", component: <Contact /> },
      { id: 8, sectionId: "affiliations", component: <Affiliations /> }, 
      { id: 9, sectionId: "faculty", component: <Faculty /> },
    ],
    menus: [
      { id: 0, href: "home", title: "Home", icon: "squares" },
      { id: 1, href: "about", title: "About Me", icon: "archive" },
      { id: 2, href: "resume", title: "Qualifications", icon: "contacs" },
      { id: 3, href: "affiliations", title: "Affiliations", icon: "affiliate" }, 
      { id: 4, href: "portfolio", title: "Appointment", icon: "briefcase" },
      { id: 5, href: "service", title: "Awards", icon: "awards" },
      { id: 6, href: "testimonials", title: "Presentations", icon: "presentation" },
      { id: 7, href: "news", title: "Publications", icon: "writing" },
      { id: 8, href: "faculty", title: "As Faculty", icon: "faculty" },
      { id: 9, href: "contact", title: "Contact", icon: "letter" },
    ],
    aboutData: {
      name: "Dr Vimal Kumar G",
      img: "/img/hero/avatar.png",
      birthday: "May 24, 1983",
      nationality: "Senior Consultant",
      email: "drgvimal@gmail.com",
      phone: "+91-9790766692",
      address: "89, S&P Residency, Vanagaram, Chennai, India-600095",
      title: "Biography",
      subTitle: "A passionate UI/UX Designer and Web Developer based In NYC, USA",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);

  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);

  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const setTestimonialItems = useCallback((value) => {
    dispatch({
      type: TESTIMONIALiTEMS,
      payload: value,
    });
  }, []);

  const setAboutData = useCallback((value) => {
    let aboutData = {
      name: value?.name || state.aboutData.name,
      img: value?.img || state.aboutData.img,
      address: value?.address || state.aboutData.address,
      bio: value?.bio || state.aboutData.bio,
      birthday: value?.birthday || state.aboutData.birthday,
      email: value?.email || state.aboutData.email,
      nationality: value?.nationality || state.aboutData.nationality,
      phone: value?.phone || state.aboutData.phone,
      title: value?.title || state.aboutData.title,
    };
    dispatch({
      type: ABOUTDATA,
      payload: value ? aboutData : state.aboutData,
    });
  }, []);

  const { modal, serviceModal, portfolioModal, blogModal, pageContent, testimonialItems, menus, aboutData } = state;

  return (
    <context.Provider
      value={{
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        pageContent,
        setTestimonialItems,
        testimonialItems,
        menus,
        setAboutData,
        aboutData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;
export { context };
