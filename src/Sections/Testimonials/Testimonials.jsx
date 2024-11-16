import React, { useRef } from "react";
import "./Testimonials.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/testimonial-images/vsa-testi-1.jpg";
import img2 from "../../assets/testimonial-images/vsa-testi-2.jpg";

gsap.registerPlugin(ScrollTrigger);
const Testimonials = () => {
   const review1 = useRef(null);
   const review2 = useRef(null);

   useGSAP(() => {
      gsap.to(review1.current, {
         translateY: 0,
         opacity: 1,
         delay: 0.3,
         duration: 0.3,

         scrollTrigger: {
            trigger: review1.current,
         },
      });
      gsap.to(review2.current, {
         translateY: 0,
         opacity: 1,
         delay: 0.3,
         duration: 0.3,
         scrollTrigger: {
            trigger: review2.current,
         },
      });
   });

   return (
      <div className="section testimonials">
         <div className="section-title">
            <h2>What our Clients Say</h2>
         </div>

         <div className="testimonials_container">
            <div className="slider">
               <div className="testimonial" ref={review1}>
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
               <div className="testimonial" ref={review2}>
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
