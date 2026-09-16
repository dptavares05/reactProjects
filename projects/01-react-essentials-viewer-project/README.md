# React Core Concepts Explorer

Interactive web application built to master and demonstrate foundational React architecture. Originally developed as the cornerstone project in **"React - The Complete Guide"** (Academind / Maximilian Schwarzmüller), structured with clean component patterns, state management, and modular styling.

---

## 📸 Preview Screenshot

![Application Preview](screenshot.png)

---

## 🛠️ Architecture & Core Concepts Applied

- **Modular Component Tree:** Separated concerns into dedicated UI feature directories (`CoreConcept`, `Examples`, `Header`, `Tabs`).
- **Component Composition & Slots:** Utilized `children` and named element props (such as `buttons` in `<Tabs />`) to achieve flexible content projection.
- **Dynamic Component Identifiers:** Implemented dynamic wrapper tags (`ButtonsContainer = 'menu'`) to render semantic elements on demand without extra DOM nodes.
- **Forwarded & Rest Props:** Used the JavaScript spread operator (`...props`) on reusable components like `<TabButton />` for native attribute extensibility.
- **Reactive State & Conditional Rendering:** Managed active selection states to dynamically switch example panels and apply conditional styling classes.

---

## 📂 Project Structure

```text
src/
├── assets/             # Static graphics and concept illustrations
├── components/
│   ├── Card/           # Generic container wrappers
│   ├── CoreConcept/    # Concept cards and grid presentation
│   ├── Examples/       # Interactive tab panels and code previews
│   ├── Header/         # Dynamic landing banner
│   ├── Section/        # Structural section wrappers
│   ├── Tabs/           # Dynamic container tabs slot
│   └── TabButton.jsx   # Interactive atomic button component
├── data.js             # Structured core concepts data source
├── App.jsx             # Top-level application layout
└── index.jsx           # React DOM root entry point
```
## ⚙️ Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Access the page locally::**
   ```bash
   http://localhost:5173/
   ```
## 💡 Key Takeaways

* Decoupled presentation from state orchestration to keep leaf components presentational and predictable.
* Avoided prop drilling by leveraging component composition and slot patterns.
* Built reusable atomic UI elements that gracefully forward standard HTML attributes.