import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="agents-grid">
          <div className="agent-card">
            <div className="agent-image">
              <img
                src="https://res.cloudinary.com/dk6cjhlwd/image/upload/v1762174954/2_qmi4do.png"
                alt="Katrina Karasawa"
              />
            </div>
            <div className="agent-info">
              <h3 className="agent-name">Katrina Karasawa</h3>
              <p className="agent-phone">775-997-3558</p>
              <p className="agent-email">KK@myagentkatrina.com</p>
              <p className="agent-company">Remax Professionals Reno</p>
              <p className="agent-license">S.171551</p>
            </div>
          </div>

          <div className="agent-card">
            <div className="agent-image">
              <img
                src="https://res.cloudinary.com/dk6cjhlwd/image/upload/v1762174316/485A8207-Edit_copy_nt9qnx.jpg"
                alt="Aaron Woods"
              />
            </div>
            <div className="agent-info">
              <h3 className="agent-name">Aaron Woods</h3>
              <p className="agent-phone">775-900-7318</p>
              <p className="agent-email">Wood@775Nevada.com</p>
              <p className="agent-company">Remax Professionals Reno</p>
              <p className="agent-license">S.190038</p>
            </div>
          </div>

          <div className="agent-card">
            <div className="agent-image">
              <img
                src="https://res.cloudinary.com/dk6cjhlwd/image/upload/v1762174127/3_dsejwh.jpg"
                alt="John Gerlach"
              />
            </div>
            <div className="agent-info">
              <h3 className="agent-name">John Gerlach</h3>
              <p className="agent-phone">775-690-5468</p>
              <p className="agent-email">Jkdgerlach@att.net</p>
              <p className="agent-company">Realty One Group Eminance</p>
              <p className="agent-license">S.197342</p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-details">
            <a href="tel:+17755935999" className="contact-cta phone">
              <div className="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-text">
                <span className="contact-label">
                  For More Information Call Us At
                </span>
                <span className="contact-value">(775) 593-5999</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
