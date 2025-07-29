import React from "react";
import { Link } from "react-router-dom"; 
import Expertise from "../components/Expertise";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";



function Page1() {
  return (
    <div>
        <Expertise />
      <ContactSection />
      <TestimonialsSection />
           <Footer />

      
      <Link to="/page2" style={{ display: "block", marginTop: 20, color: "blue" }}>
      Page suivant
      </Link>
    </div>
  );
}

export default Page1;

