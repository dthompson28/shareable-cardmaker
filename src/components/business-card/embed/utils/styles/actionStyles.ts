import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateActionStyles = (data: BusinessCardData) => `
  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
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
    cursor: pointer;
    transition: opacity 0.2s;
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