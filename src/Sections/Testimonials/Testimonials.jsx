import React from "react";
import "./Testimonials.scss";
import img1 from "../../assets/testimonial-images/vsa-testi-1.jpg";
import img2 from "../../assets/testimonial-images/vsa-testi-2.jpg";
const Testimonials = () => {
   return (
      <div className="section testimonials">
         <div className="section-title">
            <h2>What our Clients Say</h2>
         </div>

         <div className="testimonials_container">
            <div className="slider">
               <div className="testimonial">
                  <div className="text">
                     <h4>Rama moorthy</h4>
                     <p>
                        "The way you filmed my daughter's wedding was amazing.
                        The album is beautiful too. VSA Creations did a fast and
                        neat job. "
                     </p>
                  </div>
                  <div className="image">
                     <img src={img1} alt="" />
                  </div>
               </div>
               <div className="testimonial">
                  <div className="text">
                     <h4>kadhir dharshini</h4>
                     <p>
                        "The album and photo frames are beautiful and were
                        delivered quickly. Great job, thank you!"
                     </p>
                  </div>
                  <div className="image">
                     <img src={img2} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
