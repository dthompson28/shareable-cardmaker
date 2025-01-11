import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactStyles = (data: BusinessCardData) => `
  .bc-contact-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  }

  .bc-contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${data.colors.primary};
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .bc-contact-link svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;