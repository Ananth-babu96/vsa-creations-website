import "./App.scss";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import Navbar from "./Sections/Navbar/Navbar";
import Gallery from "./Sections/Gallery/Gallery";
import Services from "./Sections/Services/Services";
import Testimonials from "./Sections/Testimonials/Testimonials";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import { useRef } from "react";
function App() {
   const aboutRef = useRef(null);
   const galleryRef = useRef(null);
   const servicesRef = useRef(null);
   const contactRef = useRef(null);
   return (
      <main className="App">
         <Navbar
            aboutRef={aboutRef}
            galleryRef={galleryRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
         />

         <section>
            <Hero />
         </section>
         <section className="style" ref={aboutRef}>
            <About />
         </section>
         <section className="style" ref={galleryRef}>
            <Gallery />
         </section>
         <section className="style" ref={servicesRef}>
            <Services />
         </section>
         <section className="style">
            <Testimonials />
         </section>
         <section className="style" ref={contactRef}>
            <Contact />
         </section>
         <section>
            <Footer />
         </section>
      </main>
   );
}

export default App;
