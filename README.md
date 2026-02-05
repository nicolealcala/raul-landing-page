<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# Raul Landing Page

A fully-responsive landing page built for the Raul Agency.

<br>

## Live Demo

**View the project live:** [raul-agency.vercel.app](https://raul-agency.vercel.app/)

<br>

## Setup and Installation

Follow these steps to run the project on your local machine:

**Prerequisites**

- **Node.js:** Download and install it from [nodejs.org](https://nodejs.org/) to run the tools needed for the website.
- **A Terminal:** You can use Command Prompt (Windows) or Terminal (Mac).

<br>

**I. Installation**

1. **Download and unzip** the project folder.
2. Open your terminal and navigate to the project folder: `cd path/to/raul-landing-page`
3. **Install the dependencies:** Type the following and press Enter: `npm install`
4. **Start the project:** Type the following and press Enter: `npm run dev`
5. **View it:** Open your browser and go to the URL shown in the terminal (usually http://localhost:5173).

<br>

**II. Production Build**

1. In the terminal, run: `npm run build`. This creates a highly optimized version of the site, exactly how it would perform on a real web server.
2. Once finished, run: `npm run preview`. This will serve as the "finished product" for you to test locally.

<br>

## Resources Used

- Framework: [React](https://react.dev/) + [Vite](https://vite.dev/)
- Routing [React Router](https://reactrouter.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Typography: [Poppins (Google Fonts)](https://fonts.google.com/specimen/Poppins)
- Color Palette: [Eye Dropper](https://www.eyedropper.org/) + [Tailwind CSS Color Generator](https://uicolors.app/generate/dd03fa)
- Interactive Carousel: [Embla Carousel](https://www.embla-carousel.com/)
- Animated Counters: [React CountUp](https://github.com/glennreyes/react-countup)
- Icon SVGs: [SVG Repo](https://www.svgrepo.com/)
- Favicon: [Figma](https://www.figma.com/) + [Real Favicon Generator](https://realfavicongenerator.net/)
- Hero Image: [Photo by Yan Krukau](https://www.pexels.com/photo/four-people-working-in-the-office-7691725/)
- Testing Tool: [Browserling](https://www.browserling.com/)
- Deployment: [Vercel](https://vercel.com/)

<br>

## Developer Notes

**Assumptions Made**

Since a source design file (Figma) wasn't available, I made the following decisions to ensure a high-quality, consistent look:

1. **Visual Fidelity and Spacing:** I ensured the layout stays true to the original design by carefully calibrating all gaps and margins to match the mockup's proportions.
2. **Mobile Responsiveness:** Since a mobile version was not provided, I designed a custom responsive layout to ensure a seamless and user-friendly experience on smaller screens.
3. **Branding Colors:** Primary brand colors were extracted directly from the provided mockup. to ensure UI consistency, I generated a color palette based on these primary tones.
4. **Assets:**
   - **Logo:** Since source files were't available, I manually traced and recreated the logo as a vector (SVG). I also generated a full set of professional favicons for polished browser experience.
   - **Icons:** I curated custom icons from SVG Repo to match the mockup's, converted them into React components for reusability and customization.
   - **Image:** I selected a high-definition professional photography that aligns wth the agency's brand identity and color scheme, then converted it to **.webp** for optimization.

<br>

**Time Spent**

- **Total Time:** ~20 hours
  - Planning: 2 hours
  - Project Setup: 1 hour
  - Asset Curation and Recreation: 2.5 hours
  - Coding and debugging: 12 hours
  - Testing and deployment: 1 hour
  - Documentation: 1 hour
