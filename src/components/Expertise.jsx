import '../assets/Expertise.css';
import svgxpertisesImage from '../assets/svg/svgxpertisesImage.svg'; // Keep this if it's the image you want in the center

function Expertise() {
  return (
    <div className="expertise-wrapper">
      <h2 className="expertise-title">
        Vos besoins, <span>Nos solutions</span>
      </h2>
      <h3 className="expertise-subtitle">NOTRE EXPERTISE</h3>

      <div className="expertise-grid"> {/* Changed from circle-layout to expertise-grid */}
        {/* Card 1 */}
        <div className="expertise-card card-1">
          <span className="card-number">01</span>
          <h3>Gestion des investissements</h3>
          <p>Harness the power of the sun and embrace clean, renewable energy with our solar solutions.</p>
        </div>

        {/* Central Image (now part of the grid) */}
        <div className="grid-image"> {/* Renamed for clarity in the grid context */}
          <img src={svgxpertisesImage} alt="Expertise" />
        </div>

        {/* Card 2 */}
        <div className="expertise-card card-2">
          <span className="card-number">02</span>
          <h3>Optimisation fiscale</h3>
          <p>We pride ourselves on securing great deals and promotions for our customers.</p>
        </div>

        {/* Card 3 */}
        <div className="expertise-card card-3">
          <span className="card-number">03</span>
          <h3>Gestion de patrimoine</h3>
          <p>Stay connected with high-quality cable services that deliver reliable and fast internet, television</p>
        </div>

        {/* Card 4 */}
        <div className="expertise-card card-4">
          <span className="card-number">04</span>
          <h3>Planification financière</h3>
          <p>We understand that navigating the solar and cable landscape can be overwhelming.</p>
        </div>

        {/* Card 5 */}
        <div className="expertise-card card-5">
          <span className="card-number">05</span>
          <h3>Consultation & accompagnement</h3>
          <p>We understand that navigating the solar and cable landscape can be overwhelming.</p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;