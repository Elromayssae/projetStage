import React from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function Page2() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
     
      <button onClick={() => navigate("/")}>retour a la page arriere</button>
      <ContactForm/>
      </div>
  );
}

export default Page2;
