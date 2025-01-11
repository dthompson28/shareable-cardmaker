import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    color: var(--primary);
    background-color: var(--background);
    margin: 0;
    padding: 0;
  }

  :root {
    --primary: ${data.colors.primary};
    --secondary: ${data.colors.secondary};
    --accent: ${data.colors.accent};
    --background: ${data.colors.background};
  }

  .bc-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--background);
  }

  .bc-business-card {
    width: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .bc-business-card {
      max-width: 100%;
      border-radius: 0;
      box-shadow: none;
    }
  }
`;