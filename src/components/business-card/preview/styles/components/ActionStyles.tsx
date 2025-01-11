import { BusinessCardData } from "@/components/BusinessCardForm";

export const ActionStyles = ({ data }: { data: BusinessCardData }) => `
  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: auto;
  }
  
  .action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .share-button {
    background-color: var(--primary);
    color: white;
    border: none;
  }
  
  .share-button:hover {
    background-color: var(--secondary);
  }
  
  .save-button {
    background-color: white;
    color: var(--primary);
    border: 1px solid var(--primary);
  }
  
  .save-button:hover {
    background-color: var(--secondary);
    color: white;
    border-color: var(--secondary);
  }
`;