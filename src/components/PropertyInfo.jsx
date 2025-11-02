import { useState, useEffect } from "react";
import "./PropertyInfo.css";

const PropertyInfo = ({ property }) => {
  const { price, beds, baths, sqft, lotSize, yearBuilt, description } =
    property;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewLength, setPreviewLength] = useState(800);

  // Adjust preview length based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPreviewLength(400);
      } else {
        setPreviewLength(800);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Truncate description for preview
  const truncatedDescription =
    description.length > previewLength
      ? description.substring(0, previewLength) + "..."
      : description;
  const isTruncated = description.length > previewLength;

  return (
    <>
      <section className="property-info-section">
        <div className="section-title-container">
          <h3 className="section-header">About the Property</h3>
        </div>

        <div className="property-info-container">
          <div className="info-left">
            <div className="description">
              <p>{truncatedDescription}</p>
              {isTruncated && (
                <button
                  className="read-more-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  Read More
                </button>
              )}
            </div>
          </div>

          <div className="info-right">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon price-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21L12 3L21 21H3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="stat-value">${price?.toLocaleString()}</span>
                <span className="stat-suffix">List Price</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon bed-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 12h10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="stat-value">{beds}</span>
                <span className="stat-suffix">Beds</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon bath-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 13h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="stat-value">{baths}</span>
                <span className="stat-suffix">Baths</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon home-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="7"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 21V12h8v9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M3 9l9-6 9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="stat-value">{sqft?.toLocaleString()}sf</span>
                <span className="stat-suffix">Home Size</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon lot-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M9 9h6v6H9z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="stat-value">{lotSize}</span>
                <span className="stat-suffix">Lot Size</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon year-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="stat-value">{yearBuilt}</span>
                <span className="stat-suffix">Year Built</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="features-container">
            <ul className="features-list">
              <li>Recreational lake</li>
              <li>Lake views</li>
              <li>Four units plus manager's quarters</li>
              <li>Fully remodeled in 2025</li>
              <li>31 paved parking spaces (RV, boat, and standard vehicles)</li>
              <li>Fully fenced and gated</li>
              <li>Comprehensive sprinkler fire protection system</li>
              <li>Short-term rental permits included</li>
              <li>Security camera system</li>
              <li>Three-car high-ceiling garage</li>
              <li>Tankless water heaters</li>
              <li>Whole-property water purification system</li>
              <li>Elevator access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Description Modal */}
      {isModalOpen && (
        <div className="description-modal">
          <div className="description-modal-content">
            <button
              className="modal-close-button"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <h2 className="modal-title">Property Description</h2>
            <div className="modal-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyInfo;
