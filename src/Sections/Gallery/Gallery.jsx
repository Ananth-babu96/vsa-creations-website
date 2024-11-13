import React, { useState } from "react";
import "./Gallery.scss";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//images import------------------------------------------------
import img1 from "../../assets/gallery-images/img1.jpg";
import img2 from "../../assets/gallery-images/img2.jpg";
import img3 from "../../assets/gallery-images/img3.jpg";
import img4 from "../../assets/gallery-images/img4.jpg";
import img5 from "../../assets/gallery-images/img5.jpg";
import img6 from "../../assets/gallery-images/img6.jpg";
import img7 from "../../assets/gallery-images/img7.jpg";
import img8 from "../../assets/gallery-images/img8.jpg";
import img9 from "../../assets/gallery-images/img9.jpg";
import img10 from "../../assets/gallery-images/img10.jpg";
import img11 from "../../assets/gallery-images/img11.jpg";
import img12 from "../../assets/gallery-images/img12.jpg";
import img13 from "../../assets/gallery-images/img13.jpg";
import img14 from "../../assets/gallery-images/img14.jpg";
import img15 from "../../assets/gallery-images/img15.jpg";
import img16 from "../../assets/gallery-images/img16.jpg";
import img17 from "../../assets/gallery-images/img17.jpg";
import img18 from "../../assets/gallery-images/img18.jpg";
import img19 from "../../assets/gallery-images/img19.jpg";
import img20 from "../../assets/gallery-images/img20.jpg";
import img21 from "../../assets/gallery-images/img21.jpg";

const Gallery = () => {
   const [imageOpen, setImageOpen] = useState(false);
   const [imageIndex, setImageIndex] = useState(0);
   const images = [
      img2,
      img3,
      img4,
      img5,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img1,
   ];
   const openImage = (index) => {
      setImageOpen(true);
      setImageIndex(index);
   };

   return (
      <div className="section gallery">
         <div className={`overlay ${imageOpen ? "open" : ""}`}>
            <button
               className="btn close-btn"
               onClick={() => setImageOpen(false)}
            >
               <FaTimes />
            </button>
            <button
               className="btn backward-btn"
               onClick={() =>
                  setImageIndex((prev) =>
                     prev === 0 ? images.length - 1 : prev - 1
                  )
               }
            >
               <IoIosArrowBack />
            </button>
            <button
               className="btn forward-btn"
               onClick={() =>
                  setImageIndex((prev) => (prev + 1) % images.length)
               }
            >
               <IoIosArrowForward />
            </button>
            <img src={images[imageIndex]} alt="" />
         </div>
         <div className="section-title">
            <h2>Our Latest Works</h2>
         </div>
         <div className="gallery_view">
            {images.map((img, index) => {
               return (
                  <div className="grid-item" onClick={() => openImage(index)}>
                     <img src={img} alt="gallery image" />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Gallery;
