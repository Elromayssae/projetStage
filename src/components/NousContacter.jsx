import React from 'react';
import './NousContacter.css'; 
const NousContacter = () => { 
    return (
        <div className="nous-contacter-container"> 
            <div className="nous-contacter-content-wrapper"> 
            </div>

            <footer className="footer">
                <p>&copy; SOFTCACTUS, TOUS LES DROITS SONT RÉSERVÉS, 2025</p>
            </footer>

            <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default NousContacter;