import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .social-link {
    color: ${data.colors.primary};
    transition: opacity 0.2s;
  }

  .social-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .additional-links {
    margin: 1.5rem 0;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    margin-bottom: 0.75rem;
  }

  .additional-link-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
`;