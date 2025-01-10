import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateStyles = (data: BusinessCardData) => `
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
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
  }

  .logo {
    position: absolute;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    z-index: 10;
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

  .contact-item {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
  }

  .social-link {
    color: ${data.colors.primary};
    transition: opacity 0.2s;
  }

  .social-link:hover {
    opacity: 0.8;
  }

  .additional-links {
    padding: 0 2rem 1.5rem;
  }

  .additional-link {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    padding: 1.5rem 2rem 2rem;
  }

  .button {
    font-family: 'Open Sans', sans-serif;
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
    transition: opacity 0.2s;
  }

  .share-button {
    background-color: ${data.colors.primary};
    color: white;
    border: none;
  }

  .save-button {
    background-color: transparent;
    color: ${data.colors.accent};
    border: 2px solid ${data.colors.accent};
  }

  .button:hover {
    opacity: 0.9;
  }

  .loading {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .loaded {
    opacity: 1;
  }
`;