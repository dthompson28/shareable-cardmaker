import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 32px 0;
  }

  .social-icon {
    color: ${data.colors.primary};
    width: 20px;
    height: 20px;
  }

  .social-icon svg {
    width: 20px;
    height: 20px;
  }

  .additional-links {
    margin: 24px 0;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${data.colors.secondary};
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 12px;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;
  }

  .additional-link:hover {
    background-color: ${data.colors.secondary}1a;
  }
`;