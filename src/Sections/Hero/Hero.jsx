import React from "react";
import "./Hero.scss";
import image from "../../assets/images/heo-img.jpg";
import background from "../../assets/images/hero-bg.jpg";
import { FaPhone, FaS, FaWhatsapp } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const Hero = () => {
   return (
      <div className="container hero">
         <h1>Wedding Photography in Kumbakonam</h1>
         <p>From wedding to baby shoot. all at one place</p>
         <div className="contact-links">
            <a href="tel:+919551333311">
               <span>
                  <FaPhone />
               </span>{" "}
               955 133 3311
            </a>
            <a
               href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRGvLVqnRTdtClJhtPfbMVjMKQZLMTrSWjPnfrnshZJbndzKkZxWdPwjJQpLdgGcdrFtB"
               target="_blank"
            >
               <span>
                  <MdEmail />
               </span>{" "}
               Vsacreation123@gmail.com
            </a>
         </div>
      </div>
   );
};

export default Hero;
//  <div className="contact-details">
// <div className="top">
// <a href="#">
//    <div className="link">
//       <div className="icon">
//          <FaPhone />
//       </div>
//       <p>955 133 3311</p>
//    </div>
// </a>
// <a href="#">
//    <div className="link">
//       <div className="icon">
//          <MdEmail />
//       </div>
//       <p>Vsacreation123@gmail.com</p>
//    </div>
// </a>
// </div>
// <div className="bottom">
// <a href="#">
//    <AiFillInstagram />
// </a>
// <a href="#">
//    <FaWhatsapp />
// </a>
// </div>
// </div>
