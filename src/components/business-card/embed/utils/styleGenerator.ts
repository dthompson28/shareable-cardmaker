import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateStyles = (data: BusinessCardData) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: #f5f5f5;
  }

  .business-card {
    position: relative;
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    background-color: ${data.colors.background};
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .header {
    position: relative;
    width: 100%;
    background-color: ${data.colors.secondary};
    padding: ${data.photoStyle === 'full' ? '0' : '2rem'};
  }

  .logo {
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

  .profile {
    padding: 2rem;
    text-align: center;
  }

  .profile-image {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: 0 auto 1rem;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .name {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${data.colors.primary};
    margin: 0 0 0.5rem;
  }

  .job-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: ${data.colors.secondary};
    margin: 0 0 0.25rem;
  }

  .company {
    font-family: 'Playfair Display', serif;
    font-size: 1.125rem;
    color: ${data.colors.accent};
    margin: 0;
  }

  .contact-info {
    padding: 0 2rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    padding: 1.5rem 2rem 2rem;
  }

  .loading {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .loaded {
    opacity: 1;
  }

  @media (max-width: 640px) {
    .card-container {
      padding: 1rem;
    }

    .business-card {
      max-width: 100%;
    }

    .buttons {
      flex-direction: column;
    }

    .profile-image {
      width: 10rem;
      height: 10rem;
    }
  }
`;