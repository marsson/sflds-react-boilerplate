# Salesforce Lightning Design System React Boilerplate

A **webpack** + **Babel** + **React** starter powered by the **Salesforce Lightning Design System**. This boilerplate is inspired by Danielle Piconne's [webpack-salesforceboilerplate](https://github.com/daniellepicon/webpack-salesforceboilerplate) and serves as a solid foundation for building your **LDS for React** applications.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

---

## About the Project

This boilerplate provides a straightforward setup to quickly get started with:
1. **Webpack** for bundling and building.
2. **Babel 6** for transpiling modern JavaScript (ES6+).
3. **React** for building user interfaces.
4. **Salesforce Lightning Design System (SLDS)** to ensure a consistent, high-quality, Salesforce-like UI.
5. **Lightning Web Component** compatibility for future-proof integration.

It aims to help React developers spin up projects that utilize the **Salesforce Lightning Design System** without worrying about the initial setup complexities.

---

## Features

- **Webpack** configuration optimized for development.
- **Babel 6** integration (with a pending upgrade to Babel 7).
- **Salesforce Lightning Design System** already included and configured.
- **Hot Module Replacement** (HMR) for a smoother development experience.
- **LWC React** synergy: set up to leverage Lightning Web Components in React.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v10+ recommended)
- [npm](https://www.npmjs.com/) (v6+ recommended)

> **Note**: Until the official `design-system-react` issues are resolved (to fully support Babel 7), this boilerplate uses **Babel 6** and may require the `--force` flag on install.

### Installation

1. **Clone** the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. **Install** Dependencies:

    ```bash
    npm install --force
The --force flag is currently needed while dependencies for design-system-react and Babel are being sorted.

### Scripts
- #### *Start in Development Mode*
    ```bash
    npm start
Runs the project in development mode on http://localhost:3000. The page will reload if you make edits.

- #### *Build for Production*


    ```bash
    npm run build
Bundles the app into static files for production.

### Project Structure
    ```csharp
    your-repo-name
    │
    ├── public/
    │   └── index.html          # Main HTML file
    │
    ├── src/
    │   ├── components/         # React components
    │   ├── assets/             # Images, styles, etc.
    │   ├── App.js              # Main App component
    │   └── index.js            # Application entry point
    │
    ├── .babelrc                # Babel configuration
    ├── .gitignore              # Git ignore rules
    ├── package.json            # NPM scripts and dependencies
    ├── webpack.config.js       # Webpack configuration
    └── README.md               # This README!
### Roadmap
- *Babel 7 Upgrade:* Pending resolution of issues with design-system-react.
- *Improved Docs:* Add more detailed usage examples and best practices.
- *Test Integration:* Include Jest or another testing library to ensure code quality.
- *Production Optimization:* Fine-tune the build for performance and smaller bundle sizes.

### Contributing
Contributions are welcome! Whether it’s reporting an issue, creating a pull request, or suggesting a new feature — every bit helps. Please open an issue first to discuss potential changes and ensure a smooth contribution process.

Fork this repository.
- Create your feature branch: git checkout -b feature/amazing-feature.
- Commit your changes: git commit -m 'Add an amazing feature'.
- Push to the branch: git push origin feature/amazing-feature.
- Open a Pull Request.

### Acknowledgments
- **Danielle Piconne** for the original webpack-salesforceboilerplate.
- **The Salesforce team** for the Lightning Design System.
- **Babel and Webpack** communities for making modern web development simpler.

### License
Distributed under the MIT License. See LICENSE for more information.

Happy Coding! If you have any questions or suggestions, feel free to open an issue or reach out.

Enjoy building with Salesforce Lightning Design System React Boilerplate!





