# Astro Project

This project is built using [Astro](https://astro.build/), a modern static site generator that focuses on performance and a great developer experience. The project leverages TypeScript and includes comprehensive testing suites to ensure quality and accessibility.

## Project Structure

- **Configuration Files:**

  - `astro.config.mjs` – Astro configuration
  - `package.json` & `package-lock.json` – Node.js package management
  - `tsconfig.json` – TypeScript configuration
  - `wdio.conf.ts` – WebdriverIO configuration for end-to-end/visual testing

- **Source Code (`src/`):**

  - **Components:**
    - Example: `src/components/Welcome.astro`
  - **Layouts:**
    - Example: `src/layouts/Layout.astro`
  - **Pages:**
    - Core pages like `src/pages/index.astro` and `src/pages/summary.astro`
    - Additional pages for specific features (e.g., `availability-and-fare.astro`)
  - **Assets:**
    - Contains SVG images and other media under `src/assets/`
  - **Styles:**
    - Global CSS and component-specific styling in `src/styles/`

- **Public Directory:**

  - Contains static assets accessible by the browser (e.g., `public/favicon.svg`)

- **Tests:**
  - **Accessibility Tests:** Files like `src/pages/index.a11y.test.ts`
  - **Visual Regression Tests:** Located under `tests/`, with baseline images for various devices and configurations

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://your-repo-url.git
   cd your-repo-directory
   ```

## TESTING

The project includes a robust test suite that covers several aspects of quality assurance. Here’s a summary of the tests found in the project:

- **Visual Regression Testing:**

  - **Baseline Images:** The project stores baseline screenshots in the `tests/baseline/desktop_chrome/` directory. These images (such as those for the index page, tabbable elements, hover states, and calendar components) serve as a reference for visual comparisons.

  - **Visual Test Files:** Files like `src/pages/index.visual.test.ts` and `src/pages/availability-and-fare.tabs.visual.test.ts` automate the process of capturing current screenshots and comparing them against the baselines to detect any unexpected visual changes.

- **Accessibility Testing:**

  - The file `src/pages/index.a11y.test.ts` indicates that there are tests in place to verify the accessibility of the application’s main page. This helps ensure that the UI meets key accessibility standards, which is essential for a wider audience.

- **End-to-End Testing Configuration:**
  - These tests are usually used to simulate real user interactions, ensuring that the overall application flows and functionalities work correctly.

Overall, these tests form a comprehensive strategy covering visual consistency, accessibility compliance, and both component-level and end-to-end functionality. This setup helps maintain a high-quality user experience even as the project evolves.
