import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .business-card {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }

  .card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${data.colors.background};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const generatePhotoStyles = (data: BusinessCardData) => `
  .photo-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
  }

  .photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${data.photo}');
    background-size: cover;
    background-position: center;
  }

  .photo::after {
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
    width: 80px;
    height: 80px;
    background-image: url('${data.logo}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 10;
  }
`;

export const generateContentStyles = (data: BusinessCardData) => `
  .content {
    padding: 2rem;
  }

  .header-content {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: white;
    z-index: 10;
  }

  .name {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .job-title {
    font-size: 1.5rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 0.25rem;
  }

  .company {
    font-size: 1.25rem;
    color: rgba(255,255,255,0.9);
  }
`;

export const generateContactStyles = (data: BusinessCardData) => `
  .contact-info {
    padding: 2rem;
    background-color: ${data.colors.background};
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: ${data.colors.primary};
  }

  .contact-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: ${data.colors.primary};
  }

  .contact-info a {
    color: inherit;
    text-decoration: none;
    font-size: 1.125rem;
    transition: opacity 0.2s;
  }

  .contact-info a:hover {
    opacity: 0.8;
  }
`;

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 2rem 0;
  }

  .social-link {
    color: ${data.colors.primary};
    transition: opacity 0.2s;
  }

  .social-link i {
    width: 1.75rem;
    height: 1.75rem;
  }

  .social-link:hover {
    opacity: 0.8;
  }

  .additional-links {
    margin: 1.5rem 0;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    transition: opacity 0.2s;
  }

  .additional-link i {
    width: 1.25rem;
    height: 1.25rem;
    color: ${data.colors.accent};
  }

  .additional-link:hover {
    opacity: 0.8;
  }
`;

export const generateActionButtonStyles = (data: BusinessCardData) => `
  .action-buttons {
    display: flex;
    gap: 1rem;
    margin: 2rem;
  }

  .action-buttons button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .action-buttons button i {
    width: 1.25rem;
    height: 1.25rem;
  }

  .share-button {
    background-color: ${data.colors.primary};
    color: white;
    border: none;
  }

  .save-contact-button {
    background-color: transparent;
    color: ${data.colors.primary};
    border: 2px solid ${data.colors.primary};
  }

  .action-buttons button:hover {
    opacity: 0.9;
  }
`;

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generatePhotoStyles(data)}
  ${generateContentStyles(data)}
  ${generateContactStyles(data)}
  ${generateSocialStyles(data)}
  ${generateActionButtonStyles(data)}
`;