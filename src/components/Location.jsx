import "./Location.css";

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <h2 className="location-title">THE LOCATION</h2>

        <div className="location-wrapper">
          <iframe
            className="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.2278252975!2d-119.49084428255614!3d38.84067955000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x809965c07f53cc4b%3A0x7d57e8e62eb50d7c!2s1929%20US-395%2C%20Coleville%2C%20CA%2096107!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
