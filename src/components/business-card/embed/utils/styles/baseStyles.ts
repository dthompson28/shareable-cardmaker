import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    color: ${data.colors.primary};
    background-color: ${data.colors.background};
  }

  .bc-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
  }

  .bc-business-card {
    width: 100%;
    max-width: 448px;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .bc-content {
    padding: 1.5rem;
  }

  @media (max-width: 640px) {
    .bc-card-container {
      padding: 0;
    }

    .bc-business-card {
      border-radius: 0;
      box-shadow: none;
    }
  }
`;