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

const Testimonials = () => {
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
                	‘Efficacy of Plerixafor in CD34+ stem cell mobilization in healthy paediatric stem cell donors’ 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>50th EBMT meeting held at Glasgow</h3>
                    <span>UK in May 2024</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                ‘CD45RO cells addback in TCR αβ/CD45RA depleted haploidentical HSCT leads to superior outcomes in infants with Inborn Errors of Immunity: experience from a developing country!’ 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>50th EBMT meeting held at Glasgow </h3>
                    <span>, UK in May 2024 </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
<SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
              	‘Impact of CD45RO cells addback on TCR αβ/CD45RA depleted haploidentical HSCT in Inborn Errors of Immunity: a single centre experience from a developing country!’
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>VIVA-Asia Blood and Marrow Transplant Spring School 2024 and SJVF 2024 (18th St Jude Viva Forum) held  </h3>
                    <span>Singapore in March 2024 </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                ‘Clinical profile and treatment outcomes of Hepatoblastoma – 10-year experience from a developing country’
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>SJVF 2023 (17th St Jude Viva Forum) held </h3>
                    <span> Singapore in March 2023</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> </h3>
                    <span> </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                ‘Clinical profile, multidisciplinary management and treatment outcomes of hepatoblastoma in children – single centre experience from a developing country’ 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> 5th Emirates Pediatric Hematology Oncology Conference held at Abu Dhabi</h3>
                    <span>UAE in January 2023  </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                	‘Clinical profile and treatment outcomes of Hepatoblastoma – 10-year experience from a developing country’
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> SIOP 2019 (51st Congress of International Society of Paediatric Oncology) held at Lyon</h3>
                    <span>France in October 2019 </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                	‘Role of adjuvant chemotherapy post liver transplantation in Hepatoblastoma – necessity and feasibility’ 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>PHOCON held </h3>
                    <span> Bengaluru in December 2018</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                	‘Role of Liver Transplantation in Hepatoblastoma – Experience from a Developing Country’
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
        </Swiper>
        <div className="owl-dots" />
      </div>
    </div>
  );
};
export default Testimonials;
