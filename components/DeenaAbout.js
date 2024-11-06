import { context } from "@/context/context";
import { useContext } from "react";

const DeenaAbout = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url="/img/about/img4.jpg" />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>Dr. M. Deenadayalan  </span>
              </li>
              <li>
                <h3>Postion</h3>
                <span>HOD and Clinical Lead</span>
              </li>
              
              <li>
                <h3>Mail</h3>
                <span>drdeenadayalanm@gmail.com</span>
              </li>
             
              
              
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{aboutData.title}</h3>
        </div>
        {/* <div className="bigger_text">
          <p>{aboutData.subTitle}</p>
        </div> */}
        <div className="text">
          <p>

          Dr. M. Deenadayalan is a leading expert in Pediatric Hematology and Oncology with over 17 years of experience in treating complex pediatric conditions such as leukemia, lymphoma, neuroblastoma, and various solid tumors. Currently, he serves as the Head of Department and Clinical Lead for Pediatric Hematology, Oncology, and Bone Marrow Transplantation at MGM Cancer Institute and MGM Healthcare in Chennai. His impressive qualifications include an MBBS, DCH, DNB in Pediatrics, along with specialized fellowships in Pediatric Hematology and Oncology from the Indian Academy of Pediatrics and the National Board of Examination, New Delhi. Dr. Deenadayalan has played a pivotal role in establishing Bone Marrow Transplant (BMT) units at multiple institutions, where he introduced state-sponsored health insurance to provide equitable healthcare access for patients from all socioeconomic backgrounds.
<br/><br/>
Throughout his career, Dr. Deenadayalan has performed over 700 Allogeneic and Autologous Stem Cell Transplants, including a significant number from unrelated and haploidentical donors, making his team one of the few in India capable of executing advanced T-cell depleted haploidentical transplants. He also extends his services to various outreach clinics across Tamil Nadu and Andhra Pradesh, focusing on under-resourced areas where conditions like thalassemia are prevalent. A respected educator and speaker, Dr. Deenadayalan is regularly invited to lead workshops and seminars at national, state, and regional levels, sharing his expertise in pediatrics and respiratory medicine. Dr. Deenadayalan can be reached at +91-9841089345 or drdeenadayalanm@gmail.com for consultations and inquiries.
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default DeenaAbout;
