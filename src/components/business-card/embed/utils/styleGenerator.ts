import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  .business-card {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: ${data.colors.background};
    color: ${data.colors.primary};
  }

  .card {
    position: relative;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const generatePhotoStyles = (data: BusinessCardData) => `
  .photo-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    background-color: ${data.colors.secondary};
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
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }
`;

export const generateContentStyles = (data: BusinessCardData) => `
  .content {
    padding: 2rem;
  }

  .name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${data.colors.primary};
  }

  .job-title {
    font-size: 1.25rem;
    color: ${data.colors.secondary};
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .company {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    color: ${data.colors.primary};
  }
`;

export const generateContactStyles = (data: BusinessCardData) => `
  .contact-info {
    margin: 1.5rem 0;
  }

  .contact-info p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: ${data.colors.primary};
  }

  .contact-info i {
    width: 1.25rem;
    height: 1.25rem;
    color: ${data.colors.secondary};
  }

  .contact-info a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .contact-info a:hover {
    opacity: 0.8;
  }
`;

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
    justify-content: center;
  }

  .social-links a {
    color: ${data.colors.primary};
    transition: opacity 0.2s;
  }

  .social-links i {
    width: 1.5rem;
    height: 1.5rem;
  }

  .social-links a:hover {
    opacity: 0.8;
  }

  .additional-links {
    margin: 1rem 0;
  }

  .additional-links a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: opacity 0.2s;
  }

  .additional-links i {
    width: 1rem;
    height: 1rem;
    color: ${data.colors.accent};
  }

  .additional-links a:hover {
    opacity: 0.8;
  }
`;

export const generateActionButtonStyles = (data: BusinessCardData) => `
  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    justify-content: center;
  }

  .action-buttons button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .action-buttons i {
    width: 1.25rem;
    height: 1.25rem;
  }

  .share-button {
    background-color: ${data.colors.primary};
    color: #FFFFFF;
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

export const generateLogoStyles = (data: BusinessCardData) => `
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

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generatePhotoStyles(data)}
  ${generateLogoStyles(data)}
  ${generateContentStyles(data)}
  ${generateContactStyles(data)}
  ${generateSocialStyles(data)}
  ${generateActionButtonStyles(data)}
`;