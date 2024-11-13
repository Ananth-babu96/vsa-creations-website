import React from "react";
import "./Contact.scss";
const Contact = () => {
   return (
      <div className="section contact">
         <div className="section-title">
            <h2>Get in Touch</h2>
         </div>
         <div className="contact_content">
            <p>
               Let's capture your special moments! Fill out the form below to
               inquire about availability, packages, or any questions you may
               have. We can't wait to connect with you!
            </p>
            <form>
               <input type="text" name="" id="" placeholder="Your Name" />
               <input type="number" name="" id="" placeholder="Phhone Number" />
               <input type="email" name="" id="" placeholder="Email Id" />
               <textarea name="" id="" placeholder="Message"></textarea>
               <input type="submit" value="submit" />
            </form>
         </div>
      </div>
   );
};

export default Contact;
