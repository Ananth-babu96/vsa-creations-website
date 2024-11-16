import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiZoomIn } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
   // useEffect(() => {
   //    const items = document.querySelectorAll(".grid-item");
   //    const observer = new IntersectionObserver((entries) => {
   //       entries.forEach((entry) => {
   //          if (entry.isIntersecting) {
   //             const index = Array.from(items).indexOf(entry.target);
   //             setImages((prevImages) =>
   //                prevImages.map((img, i) =>
   //                   i === index ? { ...img, intersecting: true } : img
   //                )
   //             );
   //          }
   //       });
   //    });
   //    items.forEach((item) => {
   //       observer.observe(item);
   //    });
   //    return () => {
   //       items.forEach((item) => {
   //          observer.unobserve(item);
   //       });
   //    };
   // });
   useEffect(() => {
      const items = document.querySelectorAll(".grid-item");
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               const index = Array.from(items).indexOf(entry.target);
               setImages((prevImages) =>
                  prevImages.map((img, i) =>
                     i === index ? { ...img, intersecting: true } : img
                  )
               );
            }
         });
      });

      // Observe all items
      items.forEach((item) => observer.observe(item));

      // Cleanup observer on unmount
      return () => {
         observer.disconnect();
      };
   }, []);

   const [imageOpen, setImageOpen] = useState(false);
   const [imageIndex, setImageIndex] = useState(0);
   const [images, setImages] = useState([
      { src: img2, intersecting: false },
      { src: img3, intersecting: false },
      { src: img4, intersecting: false },
      { src: img5, intersecting: false },
      { src: img7, intersecting: false },
      { src: img8, intersecting: false },
      { src: img9, intersecting: false },
      { src: img10, intersecting: false },
      { src: img11, intersecting: false },
      { src: img12, intersecting: false },
      { src: img13, intersecting: false },
      { src: img14, intersecting: false },
      { src: img15, intersecting: false },
      { src: img16, intersecting: false },
      { src: img17, intersecting: false },
      { src: img18, intersecting: false },
      { src: img19, intersecting: false },
      { src: img20, intersecting: false },
      { src: img21, intersecting: false },
      { src: img1, intersecting: false },
   ]);
   useEffect(() => {
      console.log(images);
   }, [images]);
   const openImage = (index) => {
      setImageIndex(index);
      setImageOpen(true);
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
            <img src={images[imageIndex].src} alt="" />
         </div>
         <div className="section-title">
            <h2>Our Latest Works</h2>
         </div>
         <div className="gallery_view">
            {images.map((img, index) => {
               return (
                  <div
                     className={`grid-item ${
                        img.intersecting ? "intersecting" : ""
                     }`}
                     onClick={() => openImage(index)}
                  >
                     <div className="image-overlay">
                        <TiZoomIn />
                     </div>
                     <img src={img.src} alt="gallery image" />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Gallery;
