import { BusinessCardData } from "@/types/businessCard";

export const generateContactStyles = (data: BusinessCardData) => `
  .bc-contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .bc-contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    font-size: 1rem;
  }

  .bc-contact-link svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
`;
