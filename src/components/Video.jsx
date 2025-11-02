import { useState } from "react";
import floorplan1 from "../assets/floor-plans/50aaa43c-dbaa-4d78-8420-caad74ba448e.jpg";
import floorplan2 from "../assets/floor-plans/93a49022-509b-4c6a-805c-ec07f8897cc8.jpg";
import "./Video.css";

const Video = () => {
  const [activeTab, setActiveTab] = useState("video");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const floorplans = [floorplan1, floorplan2];

  const handleImageClick = (index) => {
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((currentSlide + 1) % floorplans.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((currentSlide - 1 + floorplans.length) % floorplans.length);
  };

  return (
    <>
      <section className="video-section">
        <div className="video-container">
          <div className="video-header">
            <h2 className="video-title">
              <button
                className={`title-tab ${activeTab === "video" ? "active" : ""}`}
                onClick={() => setActiveTab("video")}
              >
                VIDEO
              </button>
              <span className="title-separator"> | </span>
              <button
                className={`title-tab ${
                  activeTab === "floorplans" ? "active" : ""
                }`}
                onClick={() => setActiveTab("floorplans")}
              >
                FLOOR PLANS
              </button>
            </h2>
          </div>

          {activeTab === "video" ? (
            <div className="video-wrapper">
              <iframe
                className="property-video"
                src="https://www.youtube-nocookie.com/embed/0rofm2l8960?modestbranding=1&rel=0&showinfo=0"
                title="Topaz Lake Property Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="floorplans-wrapper">
              <div className="floorplans-content">
                {floorplans.map((floorplan, index) => (
                  <img
                    key={index}
                    src={floorplan}
                    alt={`Floor Plan ${index + 1}`}
                    className="floorplan-image"
                    onClick={() => handleImageClick(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleImageClick(index);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fullscreen-modal">
          <button className="modal-close" onClick={closeFullscreen}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="modal-prev" onClick={handlePrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="modal-next" onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src={floorplans[currentSlide]}
            alt={`Floor Plan ${currentSlide + 1}`}
            className="modal-image"
          />
          <div className="modal-counter">
            {currentSlide + 1} / {floorplans.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
