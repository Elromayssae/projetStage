import '../assets/Footer2.css';
import '../assets/Localisation.css'; 
import svgPhone from'../assets/svg/svgPhone.svg';
import svgCol from'../assets/svg/svgCol.svg';
import  svgLocalisation from'../assets/svg/svgLocalisation.svg';

function Footer2() {
  return (
<section className='footerSection'>

<div className="contact-container">
        <div className="contact-left">
  <div class="ligne-degradee"></div>
          <h2 className="contact-title">POUR NOUS JOINDRE</h2>
          <p className="contact-subtext">
            DÉCOUVREZ DES SOLUTIONS ABORDABLES POUR VOTRE VOITURE!
          </p>
<div className="contact-info">
            <div className="info-block">
              <img src={svgPhone} alt="Phone" />
              <div>
                <strong>Appeler à tout moment</strong>
                <p>05 36 716 777<br />05 36 716 778</p>
              </div>
            </div>

            <div className="info-block">
              <img src={svgEmail} alt="Email" />
              <div>
                <strong>Envoyer un e-mail</strong>
                <p>contact@auto48.ma</p>
              </div>
            </div>
  <div className="info-block">
              <img src={svgLocalisation} alt="Map" />
              <div>
                <strong>Visitez-nous</strong>
                <p>Rte d'Algérie lotis boustane 3 N° 191<br />Zone industrielle – Oujda</p>
              </div>
            </div>
          </div>
<div className='triangle'>
  <img src={svgCol}/>
</div>
   const address = "Rte d'Algérie lotis boustane 3 N° 191 Zone Industrielle, Oujda";
    const mapEmbedUrl = `https://www.google.com/maps/place/SOFT+CACTUS+2.0/@34.6833562,-1.9166043,17z/data=!3m1!4b1!4m6!3m5!1s0xd786522b2629bc7:0xae892dbc9b8b7453!8m2!3d34.6833562!4d-1.9166043!16s%2Fg%2F11rgd8lqrh?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D`;
   return (
            <div className="map-container">
          <iframe
            title="Localisation de notre entreprise sur Google Maps" 
            src={mapEmbedUrl} 
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
  );
<div className="footer-bottom">
        <p>© SOFTCACTUS, TOUS LES DROITS SONT RÉSERVÉS, 2025</p>
      </div>
      </div>
</div>
</section>
  )
}


export default Footer2;




