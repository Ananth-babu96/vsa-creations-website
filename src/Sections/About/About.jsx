import React from "react";
import "./About.scss";
import amarnath from "../../assets/images/amarnath.jpg";
const About = () => {
   return (
      <div className="section about">
         <div className="section-title">
            <h2>About us</h2>
         </div>
         <div className="about_content">
            <div className="text">
               <p>
                  <span> VSA Creations</span> is your go-to place for all your
                  photography needs. Whether it's a wedding, pre-wedding,
                  maternity, baby shoot, candid shoot, or bridal shoot, we
                  handle it all. We promise to deliver the best work, with
                  albums ready in no time.
               </p>
            </div>
            <div className="image">
               <img src={amarnath} alt="" />
               <div className="name">
                  <p>
                     <span>Amarnath</span> photographer
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
