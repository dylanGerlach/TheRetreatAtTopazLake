import "./Hero.css";

const Hero = ({ property }) => {
  const { address, city, state, zip, heroImage } = property;

  return (
    <section className="hero">
      <div className="hero-image">
        {heroImage ? (
          <img src={heroImage} alt={address} className="property-image" />
        ) : (
          <div className="placeholder-image">
            <span>Property Image Coming Soon</span>
          </div>
        )}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="property-address">{address}</h1>
            <p className="property-location">
              {city}, {state} {zip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
