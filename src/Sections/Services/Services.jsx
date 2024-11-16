import React from "react";
import "./Services.scss";
import img1 from "../../assets/services-images/service-img-1.jpg";
import img2 from "../../assets/services-images/service-img-2.jpg";
import img3 from "../../assets/services-images/service-img-3.jpg";
import { MdCurrencyRupee } from "react-icons/md";
const Services = () => {
   return (
      <div className="section services">
         <div className="section-title">
            <h2>What we Do For You</h2>
         </div>
         <div className="services_content">
            <div className="service">
               <div className="service_image">
                  <img src={img1} alt="" />
               </div>
               <div className="service_text">
                  <h2>Wedding Shoot</h2>
                  <p>
                     We capture the magic of your big day , preserving every
                     kiss, smile and joyous tear in stunning detail.
                  </p>
                  <p className="price">
                     price starting at{" "}
                     <span>
                        {" "}
                        <span className="rupee-icon">
                           <MdCurrencyRupee />
                        </span>
                        29,999
                     </span>
                  </p>
               </div>
            </div>
            <div className="service">
               <div className="service_image">
                  <img src={img2} alt="" />
               </div>
               <div className="service_text">
                  <h2>Pre Wedding Shoot</h2>
                  <p>
                     We celebrate your love story, capturing the romantic and
                     playful moments leading up to your big day in beautiful,
                     heartfelt detail
                  </p>
                  <p className="price">
                     price starting at{" "}
                     <span>
                        {" "}
                        <span className="rupee-icon">
                           <MdCurrencyRupee />
                        </span>
                        29,999
                     </span>
                  </p>
               </div>
            </div>
            <div className="service">
               <div className="service_image">
                  <img src={img3} alt="" />
               </div>
               <div className="service_text">
                  <h2>Maternity and Baby Shoot</h2>
                  <p>
                     Cherish the anticipation and joy of motherhood with
                     beautiful, natural photoshoots that highlight this special
                     time.
                  </p>
                  <p className="price">
                     price starting at{" "}
                     <span>
                        {" "}
                        <span className="rupee-icon">
                           <MdCurrencyRupee />
                        </span>
                        9,999
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Services;
