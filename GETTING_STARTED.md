# Getting Started: Customizing Your Portfolio

Welcome! This guide will help you quickly personalize your portfolio with your brand colors, experience, projects, technologies, socials, and more.

---

## 1. Adding Your Brand Colors

- **File:** `tailwind.config.js`
- **How:**
  - Edit the `theme.extend.colors` section to add or change your brand colors.
  - Example:
    ```js
    colors: {
      primary: "#1E293B", // Your main brand color
      accent: "#22D3EE",  // Accent color
      // ...
    }
    ```
  - Use these color names in your Tailwind classes (e.g., `bg-primary`, `text-accent`).

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
