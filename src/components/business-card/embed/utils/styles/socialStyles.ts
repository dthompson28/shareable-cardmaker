import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateSocialStyles = (data: BusinessCardData) => `
  .bc-social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .bc-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: ${data.colors.primary};
    transition: all 0.2s ease;
  }

  .bc-social-link svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .bc-additional-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .bc-additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .bc-action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .bc-action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .bc-share-button {
    background-color: ${data.colors.primary};
    color: white;
    border: none;
  }

  .bc-share-button svg {
    color: white;
  }

  .bc-save-button {
    background-color: transparent;
    color: ${data.colors.accent};
    border: 2px solid ${data.colors.accent};
  }
`;