
<div align="center">

  # ✈️ LuxeVoyage

  A modern, responsive luxury travel agency and booking web application built with modular vanilla HTML, CSS, and JavaScript.

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

<br />

## 🌐 Demo

🌐 [Run demo](https://luxevoyage-websitetravel.vercel.app)



## ✨ Features

* **Interactive Hero & Destination Search:** Dynamic hero slideshow paired with tabbed search filtering for destinations, popular cities, beaches, and mountains
* **Tour Packages & Ocean Experience:** Dedicated sections showcasing curated tour cards, waterfalls, and interactive HTML5 canvas ocean animations
* **Complete Booking & Auth Flow:** Interactive login/register modals, reservation checkout, payment simulation, and toast notifications
* **Modular Architecture:** Strictly separated stylesheets and scripts per component for clean maintenance and scalability

## 📁 Project Structure

```text
luxevoyage/
├── index.html              # Main HTML markup
├── css/
│   ├── base.css            # Color variables, reset, and utilities
│   ├── components.css      # Scroll-reveal animations & toast notifications
│   ├── login.css           # Login and registration modal styling
│   ├── navbar.css          # Navigation bar & mobile menu
│   ├── hero.css            # Hero section, waves, and CTA buttons
│   ├── search.css          # Search box styling
│   ├── destinations.css    # Destinations, popular cities, beaches & mountains
│   ├── experience.css      # Ocean & waterfall experience section
│   ├── tours.css           # Tour package cards
│   ├── booking.css         # Booking & payment modals
│   ├── footer.css          # Footer layout
│   └── responsive.css      # Breakpoints (must be loaded LAST)
└── js/
    ├── utils.js            # Toast & scroll-reveal helpers
    ├── auth.js             # Login, register, and logout logic
    ├── navbar.js           # Sticky navbar & mobile menu toggle
    ├── hero.js             # Hero slideshow controller
    ├── search.js           # Search tab switcher
    ├── ocean.js            # Ocean canvas animation
    ├── booking.js          # Booking modal, form validation & payment
    └── main.js             # Application entry point (must be loaded LAST)

```

## 🚀 Getting Started

### Windows (Git Bash / Command Prompt)

```bash
git clone https://github.com/LuthfiiiMaulana/luxevoyage-websitetravel.git
cd luxevoyage-webtravel

```

### macOS & Linux

```bash
sudo clone https://github.com/LuthfiiiMaulana/luxevoyage-websitetravel.git
cd luxevoyage-webtravel

```

Open `index.html` directly in your browser, use the **Live Server** extension in VS Code, or run a local Python server:

```bash
python3 -m http.server 8000
# Open http://localhost:8000

```

## 📌 Technical Notes

* **Client-Side Simulation:** Authentication, booking, and payment flows run purely on the client side for demonstration purposes without persistent backend storage.


* **External Assets:** Images are loaded via [Unsplash](https://unsplash.com) and typography via Google Fonts, requiring an active internet connection.


* **Asset Load Order:** Keep the `<link>` and `<script>` order intact in `index.html`—`responsive.css` and `main.js` must always load last to prevent style overrides or initialization errors.



