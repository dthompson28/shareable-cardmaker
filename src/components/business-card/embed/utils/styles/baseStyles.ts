import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  :root {
    --primary: ${data.colors.primary};
    --secondary: ${data.colors.secondary};
    --accent: ${data.colors.accent};
    --background: ${data.colors.background};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: var(--background);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bc-card-container {
    width: 100%;
    max-width: 100vw;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bc-business-card {
    width: 100%;
    max-width: 22rem;
    background-color: var(--background);
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 640px) {
    .bc-card-container {
      padding: 0.5rem;
    }
    
    .bc-business-card {
      border-radius: 0;
      box-shadow: none;
    }
  }

  .content {
    padding: 1.5rem;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    margin: 1rem 1.5rem;
  }

  .action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 44px;
  }

  .save-button {
    background-color: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
  }

  .save-button:hover {
    background-color: var(--accent);
    color: white;
  }

  .share-button {
    background-color: var(--primary);
    color: white;
    border: none;
  }

  .share-button:hover {
    background-color: var(--secondary);
  }

  /* HighLevel specific optimizations */
  .highlevel-form {
    margin-top: 2rem;
  }

  button, 
  a {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  @media screen and (max-width: 768px) {
    input,
    button,
    a {
      min-height: 44px;
    }
  }

  a[href^="tel"] {
    color: inherit;
    text-decoration: none;
  }
`;