import { context } from "@/context/context";
import { useContext, useState } from "react";

const DeenaExperience = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [active, setActive] = useState("all");
  const activeLi = (value) => (active == value ? "current" : "");
  const activeContent = (value) => {
    return active === "all" || active === value ? "show" : "hidden";
  };

  const handelClick = (value, e) => {
    e.preventDefault();
    // First, set the "active" state to hide all items
    setActive("none");
    // Then, after a brief delay, set it to show all items
    setTimeout(() => {
      setActive(value);
    }, 0);
  };

  return (
    <div className="iknow_tm_affiliations">
      <div className="w-100 iknow_tm_main_title">
        <span>Experience</span>
        <h3 className="w-100">Past Professional Experience</h3>
      </div>

      <ul className="experience">
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Senior Consultant and Clinical Lead </h4>
              <p>
                Dept. of Pediatric Hematology, Oncology and BMT Dr. Rela
                Institute and Medical Centre
              </p>
            </div>
            <div className="appointment_date">
              <span>Chennai</span>
              <span>2015 - 2019 </span>
            </div>
          </div>
        </li>
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Senior Consultant and Clinical Lead </h4>
              <p>
                Dept. of Pediatric Hematology-Oncology and BMT Gleneagles Global
                Health City
              </p>
            </div>
            <div className="appointment_date">
              <span>Chennai</span>
              <span>2015 - 2019 </span>
            </div>
          </div>
        </li>
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Consultant</h4>
              <p>
                Dept. of Pediatric Hematology-Oncology Apollo Speciality
                Hospital
              </p>
            </div>
            <div className="appointment_date">
              <span>Chennai</span>
              <span>2012 - 2015 </span>
            </div>
          </div>
        </li>
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Senior Registrar/Junior Consultant</h4>
              <p>
                Department of Pediatric Hemato-oncology, Apollo Speciality
                Hospital
              </p>
            </div>
            <div className="appointment_date">
              <span>Chennai</span>
              <span>2006 - 2011 </span>
            </div>
          </div>
        </li>
        <li className="">
          <div className="appointment_inner">
            <div>
              <h4>Registrar/Junior Consultant</h4>
              <p>General Paediatrics Kanchi Kamakoti CHILDS Trust Hospital</p>
            </div>
            <div className="appointment_date">
              <span>Chennai </span>
              <span>2001 - 2006 </span>
            </div>
          </div>
        </li>
      </ul>
      <div className="w-100 iknow_tm_main_title">
        <h3 className="w-100">Additional training and Experience</h3>
      </div>
      <div className="affiliations">
        <ul>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              Training in unrelated cord blood transplantation at Chang Gung Memorial Hospital, Taiwan</p>
          </li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              Training in Bone Marrow Transplant Unit at Great Ormond Street Hospital for Children in London, United Kingdom
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              Training in Paediatric  Haematology/ BMT  Department at Children’s Hospital of Pittsburgh of UPMC in Pittsburgh, Pennsylvania, USA.
            </p></li>

        </ul>
      </div>
      <div className="w-100 iknow_tm_main_title">
        <h3 className="w-100">Experience in Paediatric Haematology/Oncology and BMT</h3>
      </div>
      <div className="affiliations">
        <ul>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" />
            <p>I have more than 17 years of experience working in a tertiary Paediatric Haematology Oncology unit in various hospitals in Chennai.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              I have considerable experience treating benign blood disorders, malignant haematology like Leukaemia / Lymphoma, and solid tumours like Neuroblastoma, Germ cell tumours, Sarcoma, Hepatoblastoma and brain tumours.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              My expertise in BMT has helped me establish the Bone Marrow Transplant unit in three different hospitals (Global Hospital, KKCTH, Rela Institute) along with procuring the necessary state sponsored health insurance schemes (YSR Aarogyasri for patients from AP, TNCMCHIS for patients from TN) in these hospitals to benefit patients from all classes of society.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              I conduct outreach clinics at various places in Tamil Nadu (Coimbatore, Madurai, Theni, Tirunelveli Govt Hospitals) and Andhra Pradesh (Vizag, Vijayawada, Nellore) especially tribal areas of Andhra Pradesh where Thalassemia is more common.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              Till date, I have performed more than 700 Allogeneic and Autologous Stem cell transplants. Of these, a significant number of them are from Unrelated and Haploidentical donors. My team is also one of the few in the country to perform specialised T-cell depleted haploidentical transplants.
            </p></li>
          <li>
            <img className="svg" src="/img/svg/dot.svg" alt="image" /><p>
              I have been invited faculty to various national, zonal and state level workshops, seminars and symposium in pediatrics and pediatric respiratory medicine.
            </p></li>
        </ul>
      </div>
    </div>
  );
};
export default DeenaExperience;
