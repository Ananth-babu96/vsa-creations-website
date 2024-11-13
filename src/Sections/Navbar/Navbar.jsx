import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo/colored-vsa.png";
const Navbar = ({ aboutRef, galleryRef, servicesRef, contactRef }) => {
   const [menuOpen, setMenuOpen] = useState(false);
   const scrollTo = (reference) => {
      reference.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
   };

   return (
      <nav className="container navbar">
         <div className="navbar_logo">
            <img
               src={logo}
               alt=""
               onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
               }
            />
         </div>

         <ul className="navbar_desktop-menu">
            <li onClick={() => scrollTo(aboutRef)}>about</li>
            <li onClick={() => scrollTo(galleryRef)}>gallery</li>
            <li onClick={() => scrollTo(servicesRef)}>services</li>
            <li onClick={() => scrollTo(contactRef)}>contact</li>
         </ul>
         <div
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
         >
            <div></div>
            <div></div>
            <div></div>
         </div>
         <ul className={`navbar_mobile-menu ${menuOpen ? "show" : ""}`}>
            <li onClick={() => scrollTo(aboutRef)}>about</li>
            <li onClick={() => scrollTo(galleryRef)}>gallery</li>
            <li onClick={() => scrollTo(servicesRef)}>services</li>
            <li onClick={() => scrollTo(contactRef)}>contact</li>
         </ul>
      </nav>
   );
};

export default Navbar;
