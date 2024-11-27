import { context } from "@/context/context";
import { useContext } from "react";

const RishabAbout = () => {
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
                <span>Dr. Rishab Bharadwaj  </span>
              </li>
              <li>
                <h3>Postion</h3>
                <span>Consultant </span>
              </li>
              
              <li>
                <h3>Mail</h3>
                <span>rishab11@gmail.com</span>
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
          Dr. Rishab Bharadwaj is a dedicated Consultant in Pediatric Hematology, Oncology, and Bone Marrow Transplantation at MGM Cancer Institute and MGM Healthcare in Chennai. With a strong foundation in pediatric healthcare, Dr. Bharadwaj completed his MBBS from Government Stanley Medical College in Chennai, followed by an MD in Pediatrics from Smt. NHL Municipal Medical College in Ahmedabad. He further specialized with a Post-doctoral Fellowship in Pediatric Hematology-Oncology at the Kanchi Kamakoti CHILDS Trust Hospital. His international experience includes Senior Clinical Fellow roles at St. Mary’s Hospital, Imperial College NHS Trust in London, and Kokilaben Dhirubhai Ambani Hospital in Mumbai, enriching his expertise in pediatric oncology and complex hematology cases.
<br/><br/>
Dr. Bharadwaj is also an active researcher with multiple studies in pediatric immunology and neonatology. His notable projects include a study on primary immunodeficiency diseases in South Indian children and research on neonatal renal parameters and serum calcium levels in cases of birth asphyxia. His work has earned him recognition, including an ICMR Short Term Studentship for his research on Group A Beta Hemolytic Streptococci in the pediatric population. Known for his compassionate care and dedication to pediatric health, Dr. Bharadwaj can be reached at +91-9791402262 or rishab11@gmail.com. His practice address is A4, Urban Tree Awesome, 120, LB Road, Kamaraj Nagar, Thiruvanmiyur, Chennai – 600041.
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default RishabAbout;
