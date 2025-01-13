import { BusinessCardData } from "@/types/businessCard";

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
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    color: var(--primary);
    background-color: var(--background);
  }
`;

export const generateLayoutStyles = () => `
  .dbc-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
  }

  .dbc-card {
    width: 100%;
    max-width: 400px;
    background-color: var(--background);
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    .dbc-container {
      padding: 0;
    }

    .dbc-card {
      border-radius: 0;
      box-shadow: none;
    }
  }
`;

export const generateComponentStyles = () => `
  .dbc-header {
    position: relative;
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
  }

  .dbc-contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.5rem;
  }

  .dbc-social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }

  .dbc-action-buttons {
    display: flex;
    gap: 1rem;
    margin: 1.5rem;
  }
`;
