# Getting Started: Customizing Your Portfolio

Welcome! This guide will help you quickly personalize your portfolio with your brand colors, experience, projects, technologies, socials, and more.

---

## 1. How Styling Works (Material Theme)

- **File:** `src/index.css`
  - All site colors and styles are based on CSS variables defined in `:root` and `.dark` selectors in `src/index.css`.
  - These variables follow the Material Design 3 (Material You) system and can be generated using the [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/).
  - Example variables:
    ```css
    :root {
      --md-sys-color-primary: 9 20 38;
      --md-sys-color-on-primary: 255 255 255;
      --md-sys-color-secondary: 81 96 114;
      --md-sys-color-background: 251 248 250;
      /* ...more variables... */
    }
    .dark {
      --md-sys-color-primary: 188 199 222;
      --md-sys-color-on-primary: 38 49 67;
      /* ...dark mode variables... */
    }
    ```
  - Tailwind classes like `bg-primary`, `text-on-primary`, `border-outline`, etc., are mapped to these variables via `tailwind.config.js`.
  - To change the theme, update the variables in `src/index.css` (use the Material Theme Builder for easy generation).

---

## 4. Adding a Personal Photo to the Hero Section

- **File:** `src/assets/personal.jpg`
  - Add your personal photo as `personal.jpg` in the `src/assets/` folder.
  - The hero section will automatically render this image if present.
  - For best results, use a square image (e.g., 512x512px).

---

---

## 2. Adding Experience, Projects, Technologies, Socials, Name, Title, and TL;DR

All of these are managed in the `src/constants/` folder:

- **Experience:**

  - File: `src/constants/experience.js`
  - Add/edit objects in the exported array to update your work history.

- **Projects:**

  - File: `src/constants/projects.js`
  - Add/edit objects to showcase your projects. Include name, description, tags, image, and source code link.

- **Technologies:**

  - File: `src/constants/technology.js`
  - Add/edit technology objects (name, icon, etc.) to update the tech stack.

- **Socials:**

  - File: `src/constants/socials.js`
  - Add/edit objects for each social platform. Include `name`, `icon`, and `url`.

- **Name, Title, TL;DR:**
  - File: `src/constants/hero.js`
  - Update the exported object with your name, professional title, and a short summary (TL;DR).

---

## 3. Adding Logo Images

- **Folder:** `src/assets/logo/`
  - **SVGs:** Place in `src/assets/logo/svg/`
  - **PNGs:** Place in `src/assets/logo/png/`
  - **PDFs:** Place in `src/assets/logo/pdf/`
- Update logo references in `src/components/NavBar.jsx` or elsewhere as needed.

---

## 4. Adding Fonts

- **Folder:** `src/assets/brand/fonts/`
  - Place your custom font files here (e.g., `.ttf`, `.otf`).
- To use a custom font, import it in `src/index.css` and update the `font-family` as needed.

---

## 5. Quick Customization Checklist

- [ ] Update brand colors in `tailwind.config.js`
- [ ] Add your logo images to `src/assets/logo/`
- [ ] Add your fonts to `src/assets/brand/fonts/` and import in `index.css`
- [ ] Fill in your info in `src/constants/hero.js`
- [ ] Add your experience, projects, technologies, and socials in their respective files in `src/constants/`

---

For more advanced customization, edit the React components in `src/components/`.

Happy building! 🚀
