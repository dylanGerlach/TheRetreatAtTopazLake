# The Retreat at Topaz Lake

A beautiful "Coming Soon" landing page for The Retreat at Topaz Lake - an exclusive lakeside real estate community.

## Features

- 🎨 Modern, gradient-based design with smooth animations
- 📱 Fully responsive across all devices
- ✨ Email notification signup form
- 🚀 Optimized for production deployment
- 🌐 GitHub Pages ready

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with animations
- **gh-pages** - Deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/topaz.git
cd topaz
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `topaz`
2. Make sure the repository is public (required for free GitHub Pages)

### Step 2: Initialize Git and Push

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Coming Soon page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/topaz.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

Simply run:

```bash
npm run deploy
```

This command will:

1. Build the production version of your app
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR_USERNAME.github.io/topaz/`

### Step 4: Enable GitHub Pages (if not automatic)

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/topaz/` in a few minutes!

## Customization

### Updating Repository Name

If you change the repository name, update the `base` path in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/YOUR_REPO_NAME/",
});
```

### Styling

The main styling is in `src/App.css`. You can customize:

- Color gradients
- Animations
- Layout
- Typography

### Content

Update the content in `src/App.jsx`:

- Page title and description
- Features
- Logo and branding
- Email form functionality

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Project Structure

```
topaz/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build (generated)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Future Enhancements

- Connect email form to a backend service (e.g., Mailchimp, SendGrid)
- Add countdown timer to launch date
- Integrate with a CMS for easy content updates
- Add social media links
- Include property preview images
- Add Google Analytics tracking

## License

Copyright © 2025 The Retreat at Topaz Lake. All rights reserved.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using React and Vite
