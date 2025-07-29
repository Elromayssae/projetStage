import '../assets/ContactForm.css';
import  svgprofil from'../assets/svg/svgprofil.svg';
import  svgportable from'../assets/svg/svgportable.svg';
import React from 'react'; // Assurez-vous d'importer React
import '../assets/ContactForm.css'; // Assurez-vous que ce chemin est correct


const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Vous Voulez Améliorer Votre Entreprise ?</h2>
      <h3>Contactez-Nous Dès Aujourd’hui !</h3>
      <form className="contact-form">
        <div className="input-group"> {/* Ce conteneur gère la disposition des paires d'inputs */}
          {/* Nom complet et Icône Profil */}
          <div className="input-with-icon">
            <img src={svgprofil} alt="Icône Nom" className="input-icon" />
            <input type="text" placeholder="Nom complet" />
          </div>

          {/* Adresse e-mail et Icône Email */}
          <div className="input-with-icon">
            {/* Si vous avez une icône pour l'email, décommentez et remplacez svgemail */}
            {/* <img src={svgemail} alt="Icône Email" className="input-icon" /> */}
            <input type="email" placeholder="Adresse e-mail" />
          </div>
        </div>

        <div className="input-group">
          {/* Numéro de téléphone et Icône Téléphone */}
          <div className="input-with-icon">
            <img src={svgportable} alt="Icône Téléphone" className="input-icon" />
            <input type="tel" placeholder="Numéro de téléphone" />
          </div>

          {/* Objet et Icône Objet */}
          <div className="input-with-icon">
            {/* Si vous avez une icône pour l'objet, décommentez et remplacez svgobject */}
            {/* <img src={svgobject} alt="Icône Objet" className="input-icon" /> */}
            <input type="text" placeholder="Objet" />
          </div>
        </div>

        <textarea placeholder="Écrivez votre message ici..."></textarea>
        <button type="submit">Sent Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

