import { BusinessCardData } from "@/types/businessCard";

export const generateContainerStyles = (data: BusinessCardData) => `
  #digital-business-card-root.dbc-wrapper {
    all: initial;
    font-family: 'Open Sans', sans-serif;
  }

  #digital-business-card-root.dbc-wrapper * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #digital-business-card-root .dbc-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding: 1rem;
    background-color: ${data.colors.background};
  }

  #digital-business-card-root .dbc-business-card {
    width: 100%;
    max-width: 32rem;
    margin: 0 auto;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    position: relative;
  }
`;
