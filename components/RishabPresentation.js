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

const RishabPresentation = () => {
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
               Paediatric Acute Promyelocytic Leukemia presenting as a paraspinal mass 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>Quarterly meeting of Mumbai Hematology Group</h3>
                    <span>2020</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
                Haplo-identical BMT in a case of sickle cell anemia
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>Quarterly meeting of Mumbai Hematology Group, </h3>
                    <span>2019</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
<SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
              	•	A study of referral pattern of neonates at a tertiary care centre and role of TOPS (Temperature, Oxygenation, Perfusion and Sugar) score in assessing morbidity and mortality 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>GIAPCON, Rajkot </h3>
                    <span>2015 (Awarded 1st place)</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
               Isolation of Group A Beta Hemolytic Streptococci in paediatric age group, antibiotic susceptibility testing and evaluation of anaerobic incubation compared to conventional technique 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>UG Medical Students’ Regional Research Conference, </h3>
                    <span>Thiruvananthapuram, 2011</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
               Clinico-immunological profile of Primary Immunodeficiency Diseases at a tertiary care children’s hospital in South India 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> 22nd Annual Pediatric Hematology Oncology Conference (PHOCON),</h3>
                    <span> Benagaluru, 2018  </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
               Cytogenetic profile in children with B-Acute Lymphoblastic Leukemia and its correlation with induction outcomes 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3> 22nd Annual Pediatric Hematology Oncology Conference (PHOCON)</h3>
                    <span>Bengaluru, 2018  </span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
               Medulloblastoma molecular sybtypes: Profile and outcomes from a tertiary care unit in South India 
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>22nd Annual Pediatric Hematology Oncology Conference (PHOCON)</h3>
                    <span>Bengaluru, 2018</span>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="list_inner">
            <div className="in">
              <div className="text">
                <p>
              	•	A case of Benign Familial Neonatal Seizures (BFNS)
                </p>
              </div>
              <div className="details">
                <div className="left">
                  
                  <div className="info">
                    <h3>NEUROPEDICON </h3>
                    <span>Ahmedabad, 2016</span>
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
export default RishabPresentation;
