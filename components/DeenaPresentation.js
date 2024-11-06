"use client";
import { context } from "@/context/context";
import { iKnowUtilits } from "@/utility";
import { useContext, useEffect } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const DeenaPresentation = () => {
  const { testimonialItems } = useContext(context);

  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: testimonialItems, spaceBetween: 25 },
    },
  };
  useEffect(() => {
    iKnowUtilits.dataImage();
    iKnowUtilits.imgToSVG();
  }, []);

  return (
    <div className="iknow_tm_testimonials">
      <div className="iknow_tm_main_title">
        <span>Overview of Research Topics</span>
        <h3>Paper Presentations</h3>
      </div>
      <div
        className={`testimonials_list owl-theme ${
          testimonialItems == 1 ? "no-sadow" : ""
        }`}
      >
        <Swiper {...props}>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                Clinico- immunological profile of primary immunodeficiency disease in Teritary care children hospital in South India 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>3rd Asia Pacific society for immunodeficiencies</h3>
                    <span>Chandigarh, India</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                	Autolymphoproliferative like presentation in a child with Novel LRBA defect in South India
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>3rd Asia Pacific society for immunodeficiencies</h3>
                    <span>handigarh, India</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
<SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
              	Evans syndrome as a primary presentation of a novel WAS mutant Wiskott Aldrich Syndrome 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>South India in 3rd Asia Pacific society  </h3>
                    <span>immunodeficiencies- Chandigarh</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                LRBA mutation- Single center experience and literature in South India
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>3rd Asia Pacific society for immunodeficiencies</h3>
                    <span>Chandigarh, India</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                Clinico-immunological profile of primary immunodeficiency diseases at a tertiary care children’s hospital
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> South India in PHOCON 2018</h3>
                    <span> Bengaluru  </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                	A descriptive analysis of primary immunodeficiencies in a children’s hospital in Southern India
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> CIDSCON 2018</h3>
                    <span>Vellore  </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                	Hemophagocytic lymphohistiocytosis in children: a single center experience
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>Tamil Nadu State Conference.</h3>
                    <span>TRY PEDICON 2018</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
              	Multidisciplinary management of hepatoblastoma in children - Experience from South India 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>PHOCON 2016,  </h3>
                    <span>Pune</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                Irinotecan as a maintenance therapy in relapsed Hepatoblastoma-a case report 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> PHOCON held </h3>
                    <span> Mumbai in November 2016</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                ‘Multidisciplinary management of Hepatoblastoma with incorporation of Liver Transplantation in children’
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> PHOCON held </h3>
                    <span> Mumbai in November 2016</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                Role of Liver Transplantation in Hepatoblastoma – Experience from a Developing Country 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> St Jude Viva Forum</h3>
                    <span> Singapore 2017</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide> 
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};
export default DeenaPresentation;
