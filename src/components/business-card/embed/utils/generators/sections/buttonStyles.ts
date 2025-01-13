import { BusinessCardData } from "@/types/businessCard";

export const generateButtonStyles = (data: BusinessCardData) => `
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
    transition: all 0.2s ease;
  }

  .share-button {
    background-color: ${data.colors.primary};
    color: white;
    border: none;
  }

  .share-button:hover {
    background-color: ${data.colors.secondary};
  }

  .save-button {
    background-color: transparent;
    color: ${data.colors.accent};
    border: 2px solid ${data.colors.accent};
  }

  .save-button:hover {
    background-color: ${data.colors.secondary};
    color: white;
    border-color: ${data.colors.secondary};
  }

  .action-button svg {
    width: 20px;
    height: 20px;
    background: none;
  }
`;