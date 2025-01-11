import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateSocialStyles = (data: BusinessCardData) => `
  .bc-social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 24px;
  }

  .bc-social-link {
    color: ${data.colors.primary};
    transition: color 0.2s ease;
  }

  .bc-social-link svg {
    width: 24px;
    height: 24px;
  }

  .bc-additional-links {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  }

  .bc-additional-link {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${data.colors.primary};
    text-decoration: none;
    transition: all 0.2s ease;
  }
`;