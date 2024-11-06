import { context } from "@/context/context";
import { useContext } from "react";

const DeenaPublication = () => {
  const publications = [
    {
      id: 1,
      content: "	Congenital Esophageal stenosis.  ",
      place: " Indian Journal of Practical Pediatrics, Year 2005, Vol 7, Issue 2 ",
    },
    {
      id: 2,
      content: "	Pediatric Strokes: A hospital based observation. ",
      place: "Journal of Pediatric Neurology, Year 2006, vol 4. ",
    },
    {
      id: 3,
      content: "	Richner Hanhart Syndrome.",
      place: " Indian Journal of Pediatrics, Year 2006, Feb, Volume 73,  Issue 2, pg 161-2Pediatr Blood Cancer. 2023; 70: e30024",
    },

    {
      id:4 ,
      content: " Neonatal Bartter syndrome. Indian Pediatrics ",
      place: ", Year 2006, Aug, Vol 43, Issue 8, pg   735-7 ",
    }, 
    {
      id: 5,
      content: "		Mixed connective tissue disease in children ",
      place: " Indian Journal of Practical Pediatrics, Year 2006, Jan-Mar, Issue 1.",
    },
    {
      id: 6,
      content: " ‘Interstitial lung disease in infancy. ",
      place: "Indian Journal of Pediatrics, Year 2007, July Volume 74,  Issue 7, pg 637-9.",
    },
    {
      id: 7,
      content: " 	Transient Methemoglobinemia in infancy",
      place: "	Indian Journal of Pediatrics, Year 2007 Nov, Vol 74, Issue 11, pg 1037-8 ",
    },
    {
      id: 8,
      content: "	Unusual presentation of HIV Vasculopathy in a child",
      place: "Indian Journal of Hematology and Blood Transfusion. 2011. Sep;27(3):169-71.  ",
    },
    {
      id: 9,
      content: " 	Autologous Immune Enhancement therapy in Philadelphia Chromosome positive Acute Lymphoblastic Leukaemia.  ",
      place: "Indian Journal of Hematology and Blood Transfusion. 2014 Sep; 30 (Suppl 1):202-4 ",
    },
    {
      id:10 ,
      content: "	Kaposiform Hemangioendothelioma in a 3 Months Old Infant.",
      place: " Indian Journal of Hematology and Blood Transfusion..Published online April 2016  ",
    },
    {
      id:11 ,
      content: "Multidisciplinary management of hepatoblastoma in children: Experience from a developing country. ",
      place: " Pediatric Blood and Cancer, DOI: 10.1002/pbc.26249",
    },
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
        <span>Works</span>
        <h3>Publications</h3>
      </div>
      <div className="news_list">
        <ul>
          {publications.map((publication) => (
            <li key={publication.id}>
              <div className="list_inner">
               
                <div className="details">
                 <p>
                  {publication.content}
                 </p>
                  <span className="title">
                    {publication.place}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DeenaPublication;
