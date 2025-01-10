import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateStyles = (data: BusinessCardData) => `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${data.colors.background};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .card-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .business-card {
    background: white;
    max-width: 28rem;
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    contain: content;
  }

  .header {
    background-color: ${data.colors.primary};
    height: ${data.photoStyle === 'full' ? '16rem' : '12rem'};
    position: relative;
    background-image: ${data.photo ? `url(${data.photo})` : 'none'};
    background-size: cover;
    background-position: center;
  }

  .header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }

  .logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 4rem;
    width: 4rem;
    object-fit: contain;
    background: white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    z-index: 10;
  }

  .profile {
    position: relative;
    padding: ${data.photoStyle === 'full' ? '0 2rem 2rem' : '0 2rem'};
    text-align: ${data.photoStyle === 'full' ? 'left' : 'center'};
    z-index: 1;
  }

  .profile-image {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 4px solid white;
    margin: ${data.photoStyle === 'full' ? '0' : '-4rem auto 0'};
    object-fit: cover;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    display: ${data.photoStyle === 'full' ? 'none' : 'block'};
  }

  .name {
    color: ${data.photoStyle === 'full' ? 'white' : data.colors.primary};
    font-size: 2rem;
    font-weight: bold;
    margin: ${data.photoStyle === 'full' ? '0' : '1rem 0 0.5rem'};
    position: ${data.photoStyle === 'full' ? 'absolute' : 'relative'};
    bottom: ${data.photoStyle === 'full' ? '4rem' : 'auto'};
    text-shadow: ${data.photoStyle === 'full' ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'};
  }

  .job-title {
    color: ${data.photoStyle === 'full' ? 'rgba(255,255,255,0.9)' : data.colors.secondary};
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    position: ${data.photoStyle === 'full' ? 'absolute' : 'relative'};
    bottom: ${data.photoStyle === 'full' ? '2.5rem' : 'auto'};
    text-shadow: ${data.photoStyle === 'full' ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'};
  }

  .company {
    color: ${data.photoStyle === 'full' ? 'rgba(255,255,255,0.9)' : data.colors.secondary};
    font-size: 1.125rem;
    margin-bottom: ${data.photoStyle === 'full' ? '0' : '2rem'};
    position: ${data.photoStyle === 'full' ? 'absolute' : 'relative'};
    bottom: ${data.photoStyle === 'full' ? '1rem' : 'auto'};
    text-shadow: ${data.photoStyle === 'full' ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'};
  }

  .contact-info {
    padding: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color 0.2s;
  }

  .contact-item:hover {
    color: ${data.colors.primary};
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .social-link {
    color: ${data.colors.secondary};
    transition: color 0.2s;
  }

  .social-link:hover {
    color: ${data.colors.primary};
  }

  .buttons {
    display: flex;
    gap: 1rem;
    padding: 0 1.5rem 1.5rem;
  }

  .button {
    flex: 1;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: white;
    transition: opacity 0.2s;
  }

  .button:hover {
    opacity: 0.9;
  }

  .share-button {
    background-color: ${data.colors.primary};
  }

  .save-button {
    background-color: ${data.colors.accent};
  }

  .loading {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .loaded {
    opacity: 1;
  }
`;
