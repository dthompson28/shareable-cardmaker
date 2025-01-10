import { BusinessCardData } from "@/components/BusinessCardForm";

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

  .action-buttons button:hover {
    opacity: 0.9;
  }

  .share-button {
    background-color: ${data.colors.primary};
    color: #FFFFFF;
    border: none;
  }

  .save-contact-button {
    background-color: ${data.colors.background};
    color: ${data.colors.accent};
    border: 2px solid ${data.colors.accent};
  }

  .save-contact-button:hover {
    background-color: ${data.colors.secondary};
    color: ${data.colors.background};
  }
`;

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generatePhotoStyles(data)}
  ${generateLogoStyles(data)}
  ${generateContentStyles(data)}
  ${generateSocialStyles(data)}
  ${generateActionButtonStyles(data)}
`;
