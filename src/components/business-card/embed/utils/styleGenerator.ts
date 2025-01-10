import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  .business-card {
    font-family: system-ui, -apple-system, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: ${data.colors.background};
    color: ${data.colors.text};
  }

  .card {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
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

export const generateContentStyles = (data: BusinessCardData) => `
  .content {
    padding: 2rem;
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${data.colors.primary};
  }

  .job-title {
    font-size: 1.125rem;
    color: ${data.colors.secondary};
    margin-bottom: 0.25rem;
  }

  .company {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const generateContactStyles = (data: BusinessCardData) => `
  .contact-info {
    margin-bottom: 1.5rem;
  }

  .contact-info a {
    color: ${data.colors.primary};
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }
`;

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .social-links a {
    color: ${data.colors.primary};
  }

  .social-links a:hover {
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
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
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