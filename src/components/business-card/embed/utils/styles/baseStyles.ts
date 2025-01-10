import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  :root {
    --primary: ${data.colors.primary};
    --secondary: ${data.colors.secondary};
    --accent: ${data.colors.accent};
    --background: ${data.colors.background};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: var(--background);
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
    max-width: 22rem;
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  @media (max-width: 640px) {
    .bc-card-container {
      padding: 0.5rem;
    }

    .bc-business-card {
      max-width: 18rem;
    }
  }
`;