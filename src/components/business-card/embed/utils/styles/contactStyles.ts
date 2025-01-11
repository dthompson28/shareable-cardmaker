import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactStyles = (data: BusinessCardData) => `
  .bc-contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.5rem 0;
  }

  .bc-contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    font-size: 1.125rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;
  }

  .bc-contact-link svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    stroke: currentColor;
  }

  .bc-contact-link:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;