import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderLayoutStyles = (data: BusinessCardData) => `
  #digital-business-card-root .dbc-header {
    position: relative;
    width: 100%;
    height: 16rem;
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
    ${data.photo ? `background-image: url('${data.photo}');` : ''}
  }

  #digital-business-card-root .dbc-header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  #digital-business-card-root .dbc-header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    z-index: 10;
  }

  #digital-business-card-root .dbc-header-text {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    color: white;
    z-index: 10;
  }
`;