import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="background-overlay"></div>
      <div className="content">
        <header className="header">
          <div className="logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8"
                y="16"
                width="8"
                height="16"
                fill="currentColor"
                opacity="0.8"
              />
              <rect x="18" y="12" width="8" height="20" fill="currentColor" />
              <rect
                x="28"
                y="8"
                width="8"
                height="24"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
            <span>TOPAZ</span>
          </div>
        </header>

        <main className="main">
          <div className="badge">Coming Soon</div>

          <h1 className="title">
            The Retreat at
            <br />
            <span className="highlight">Topaz Lake</span>
          </h1>

          <p className="description">
            Discover serenity in the heart of nature. An exclusive lakeside
            community offering unparalleled luxury and breathtaking views. Your
            dream retreat awaits.
          </p>

          <div className="features">
            <div className="feature">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 20L12 4L21 20H3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 20L12 10L17 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="feature-text">Mountain Views</div>
            </div>
            <div className="feature">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.5 2 6 4.5 6 8C6 10.5 7 13 12 18C17 13 18 10.5 18 8C18 4.5 15.5 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="8"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M4 18C4 16 6 15 8 15C10 15 11 16 12 17C13 16 14 15 16 15C18 15 20 16 20 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="feature-text">Lake Access</div>
            </div>
            <div className="feature">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="feature-text">Luxury Living</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
