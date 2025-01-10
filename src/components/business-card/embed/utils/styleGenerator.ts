import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateStyles = (data: BusinessCardData) => `
  .bc-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 2rem;
    background-color: transparent;
  }

  .bc-business-card {
    position: relative;
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    background-color: ${data.colors.background};
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .bc-header {
    position: relative;
    width: 100%;
    background-color: ${data.colors.secondary};
    padding: ${data.photoStyle === 'full' ? '0' : '2rem'};
  }

  .bc-logo {
    position: absolute;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    z-index: 10;
    ${data.logoPosition ? `
      top: ${data.logoPosition.y}%;
      left: ${data.logoPosition.x}%;
      transform: translate(-50%, -50%);
    ` : ''}
  }

  .bc-profile {
    padding: 2rem;
    text-align: center;
  }

  .bc-profile-image {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: 0 auto 1rem;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .bc-name {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${data.colors.primary};
    margin: 0 0 0.5rem;
  }

  .bc-job-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: ${data.colors.secondary};
    margin: 0 0 0.25rem;
  }

  .bc-company {
    font-family: 'Playfair Display', serif;
    font-size: 1.125rem;
    color: ${data.colors.accent};
    margin: 0;
  }

  .bc-contact-info {
    padding: 0 2rem;
  }

  .bc-buttons {
    display: flex;
    gap: 1rem;
    padding: 1.5rem 2rem 2rem;
  }

  .bc-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  .bc-share-button {
    background-color: ${data.colors.primary};
    color: white;
  }

  .bc-share-button:hover {
    opacity: 0.9;
  }

  .bc-save-button {
    background-color: transparent;
    color: ${data.colors.accent};
    border: 2px solid ${data.colors.accent};
  }

  .bc-save-button:hover {
    background-color: ${data.colors.accent};
    color: white;
  }

  .bc-contact-item {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    margin-bottom: 0.5rem;
  }

  .bc-contact-item:hover {
    background-color: ${data.colors.background};
    color: ${data.colors.secondary};
  }

  .bc-social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }

  .bc-social-link {
    color: ${data.colors.primary};
    transition: all 0.2s ease;
  }

  .bc-social-link:hover {
    color: ${data.colors.secondary};
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    .bc-card-container {
      padding: 1rem;
    }

    .bc-business-card {
      max-width: 100%;
    }

    .bc-buttons {
      flex-direction: column;
    }

    .bc-profile-image {
      width: 10rem;
      height: 10rem;
    }
  }
`;