import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactStyles = (data: BusinessCardData) => `
  .contact-info a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 0.5rem;
  }

  .contact-info a:hover {
    background-color: var(--background);
    color: var(--secondary);
  }

  .contact-info svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;