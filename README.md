# Shoe Advertisement Project

This is an interactive advertising website for a fictional shoe product, built as a modern, mobile-responsive web application.

## Tech Stack

-   **JavaScript (ES6+)**: Core application logic.
-   **HTML5**: Page structure.
-   **SCSS**: Styling.
-   **webpack**: Build tool for bundling assets.
-   **GSAP**: Animation library.
-   **Swiper.js**: Library for the product gallery.

## Project Structure

The project follows a component-based architecture with a clear separation of concerns.

-   `dist/`: Contains the final bundled files for production.
-   `src/`: Contains the source code.
    -   `assets/`: Images, videos, and other static assets.
    -   `js/`: JavaScript modules (App, Scenes, etc.).
    -   `scss/`: SCSS partials for styling.
    -   `index.html`: The main HTML template.
-   `webpack.config.js`: Configuration for the webpack build process.
-   `package.json`: Project metadata and dependencies.

## How to Run

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd shoe-advertisement
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    This will start a local server, open the application in your browser, and watch for file changes.
    ```bash
    npm start
    ```

4.  **Build for production**:
    This will bundle the code and assets into the `dist/` folder, ready for deployment.
    ```bash
    npm run build
    ```

## Architectural Decisions

The application is built around a class-based, scene-management system. An `App` class acts as the main controller, managing the application lifecycle and global event listeners. A `SceneManager` handles transitions between different views (`Intro`, `Gallery`, `Video`), each encapsulated in its own class. This approach promotes modularity, making the codebase easier to understand, maintain, and extend.

Webpack was chosen as the build tool for its robustness and extensive configurability, which allows for precise control over how assets are processed and bundled, preventing common issues related to asset path resolution. All assets are imported directly into the JavaScript modules, allowing webpack to manage them and include them in the build graph correctly. 