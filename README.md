
<div align="center">

  # ✈️ LuxeVoyage

  A modern, responsive luxury travel agency and booking web application built with modular vanilla HTML, CSS, and JavaScript.

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

<br />

## 🌐 Demo

🌐 [Run demo](https://web-travel.vercel.app)

*(Tempel gambar showcase Figma kamu di baris kosong ini setelah di-upload)*

## ✨ Features

* **Interactive Hero & Destination Search:** Dynamic hero slideshow paired with tabbed search filtering for destinations, popular cities, beaches, and mountains[cite: 9].
* **Tour Packages & Ocean Experience:** Dedicated sections showcasing curated tour cards, waterfalls, and interactive HTML5 canvas ocean animations[cite: 9].
* **Complete Booking & Auth Flow:** Interactive login/register modals, reservation checkout, payment simulation, and toast notifications[cite: 9, 10].
* **Modular Architecture:** Strictly separated stylesheets and scripts per component for clean maintenance and scalability[cite: 9].

## 📁 Project Structure

```text
luxevoyage/
├── index.html              # Main HTML markup[cite: 9]
├── css/
│   ├── base.css            # Color variables, reset, and utilities[cite: 9]
│   ├── components.css      # Scroll-reveal animations & toast notifications[cite: 9]
│   ├── login.css           # Login and registration modal styling[cite: 9]
│   ├── navbar.css          # Navigation bar & mobile menu[cite: 9]
│   ├── hero.css            # Hero section, waves, and CTA buttons[cite: 9]
│   ├── search.css          # Search box styling[cite: 9]
│   ├── destinations.css    # Destinations, popular cities, beaches & mountains[cite: 9]
│   ├── experience.css      # Ocean & waterfall experience section[cite: 9]
│   ├── tours.css           # Tour package cards[cite: 9]
│   ├── booking.css         # Booking & payment modals[cite: 9]
│   ├── footer.css          # Footer layout[cite: 9]
│   └── responsive.css      # Breakpoints (must be loaded LAST)[cite: 9]
└── js/
    ├── utils.js            # Toast & scroll-reveal helpers[cite: 9]
    ├── auth.js             # Login, register, and logout logic[cite: 9]
    ├── navbar.js           # Sticky navbar & mobile menu toggle[cite: 9]
    ├── hero.js             # Hero slideshow controller[cite: 9]
    ├── search.js           # Search tab switcher[cite: 9]
    ├── ocean.js            # Ocean canvas animation[cite: 9]
    ├── booking.js          # Booking modal, form validation & payment[cite: 9]
    └── main.js             # Application entry point (must be loaded LAST)[cite: 9]

```

## 🚀 Getting Started

### Windows (Git Bash / Command Prompt)

```bash
git clone [https://github.com/LuthfiiiMaulana/web-travel.git](https://github.com/LuthfiiiMaulana/web-travel.git)
cd web-travel

```

### macOS & Linux

```bash
sudo git clone [https://github.com/LuthfiiiMaulana/web-travel.git](https://github.com/LuthfiiiMaulana/web-travel.git)
cd web-travel

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



