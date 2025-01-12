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
    background-color: transparent !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .business-card {
    width: 100%;
    max-width: 448px;
    border-radius: 12px;
    background-color: ${data.colors.background};
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;