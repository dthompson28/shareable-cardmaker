import { BusinessCardData } from "@/types/businessCard";

export const generateStylesSection = (data: BusinessCardData) => `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.5;
      background-color: ${data.colors.background};
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    .business-card {
      width: 100%;
      max-width: 448px;
      background: ${data.colors.background};
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .header {
      position: relative;
      width: 100%;
      height: 256px;
      background-size: cover;
      background-position: center;
      background-color: ${data.colors.secondary};
    }

    .header-content {
      position: relative;
      height: 100%;
      padding: 24px;
    }

    .header-logo {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 64px;
      height: 64px;
      object-fit: contain;
    }

    .header-text {
      position: absolute;
      bottom: 24px;
      left: 24px;
      color: white;
    }

    .header-text h1 {
      font-size: 28px;
      margin-bottom: 4px;
      font-weight: 700;
      font-family: 'Playfair Display', serif;
    }

    .header-text p {
      font-size: 18px;
      margin: 2px 0;
      opacity: 0.9;
      font-family: 'Playfair Display', serif;
    }

    .content {
      padding: 24px;
      background-color: ${data.colors.background};
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: ${data.colors.primary};
      text-decoration: none;
      font-size: 16px;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .contact-link:hover {
      background-color: ${data.colors.primary}1a;
    }

    .contact-link svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      background: none;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin: 32px 0;
    }

    .social-icon {
      color: ${data.colors.primary};
      width: 20px;
      height: 20px;
    }

    .social-icon svg {
      width: 20px;
      height: 20px;
      background: none;
    }

    .additional-links {
      margin: 24px 0;
    }

    .additional-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${data.colors.secondary};
      text-decoration: none;
      font-size: 16px;
      margin-bottom: 12px;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .additional-link:hover {
      background-color: ${data.colors.secondary}1a;
    }

    .additional-link svg {
      width: 20px;
      height: 20px;
      background: none;
    }

    .action-buttons {
      display: flex;
      gap: 16px;
      margin-top: 32px;
    }

    .action-button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }

    .share-button {
      color: white;
      border: none;
      background-color: ${data.colors.primary};
    }

    .share-button svg {
      color: white;
      background: none;
    }

    .save-button {
      background-color: transparent;
      color: ${data.colors.accent};
      border: 2px solid ${data.colors.accent};
    }

    .save-button svg {
      background: none;
    }
  </style>
`;
