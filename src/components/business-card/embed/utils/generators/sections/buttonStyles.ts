import { BusinessCardData } from "@/components/BusinessCardForm";

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
`;