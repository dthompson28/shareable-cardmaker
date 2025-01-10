import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
  .business-card {
    max-width: 500px;
    margin: 0 auto;
    font-family: system-ui, -apple-system, sans-serif;
  }
  .card {
    background-color: ${data.colors.background};
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    position: relative;
    min-height: 500px;
  }`;

export const generatePhotoStyles = (data: BusinessCardData) => `
  .photo-container {
    position: relative;
    ${data.photoStyle === 'compact' 
      ? `height: 12rem; background-color: ${data.colors.secondary};` 
      : 'height: 16rem;'}
  }
  .photo {
    ${data.photoStyle === 'compact'
      ? `
        position: absolute;
        left: 1.5rem;
        bottom: -3rem;
        width: 12rem;
        height: 12rem;
        border-radius: 9999px;
        border: 4px solid white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10;
      `
      : `
        width: 100%;
        height: 100%;
        object-fit: cover;
      `}
    background-image: url(${data.photo});
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
  }`;

export const generateContentStyles = (data: BusinessCardData) => `
  .content {
    padding: 1.5rem;
    ${data.photoStyle === 'compact' ? 'padding-top: 4rem;' : ''}
    text-align: left;
  }
  .name {
    font-size: 1.875rem;
    font-weight: 700;
    color: ${data.colors.primary};
    margin: 0 0 0.5rem 0;
  }
  .job-title {
    font-size: 1.25rem;
    color: ${data.colors.secondary};
    margin: 0 0 0.25rem 0;
  }
  .company {
    font-size: 1.125rem;
    color: ${data.colors.accent};
    margin: 0 0 1.5rem 0;
  }`;

export const generateContactStyles = (data: BusinessCardData) => `
  .contact-info {
    margin: 1rem 0;
    text-align: left;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.75rem 0;
    color: ${data.colors.primary};
    text-decoration: none;
  }
  .contact-item svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  .contact-item span {
    word-break: break-word;
  }`;

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
  .social-link {
    color: ${data.colors.primary};
    text-decoration: none;
  }
  .social-link svg {
    width: 20px;
    height: 20px;
  }
  .additional-links {
    margin-top: 1rem;
  }
  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    margin: 0.5rem 0;
  }`;

export const generateLogoStyles = (data: BusinessCardData) => `
  .logo {
    position: absolute;
    width: 4rem;
    height: 4rem;
    background-image: url(${data.logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    ${data.logoPosition.x <= 25 && data.logoPosition.y <= 25 ? 'top: 1rem; left: 1rem;' : ''}
    ${data.logoPosition.x >= 75 && data.logoPosition.y <= 25 ? 'top: 1rem; right: 1rem;' : ''}
    ${data.logoPosition.x <= 25 && data.logoPosition.y >= 75 ? 'bottom: 1rem; left: 1rem;' : ''}
    ${data.logoPosition.x >= 75 && data.logoPosition.y >= 75 ? 'bottom: 1rem; right: 1rem;' : ''}
    ${(data.logoPosition.x > 25 && data.logoPosition.x < 75) || (data.logoPosition.y > 25 && data.logoPosition.y < 75) 
      ? `top: ${data.logoPosition.y}%; left: ${data.logoPosition.x}%;` 
      : ''}
    z-index: 20;
  }`;