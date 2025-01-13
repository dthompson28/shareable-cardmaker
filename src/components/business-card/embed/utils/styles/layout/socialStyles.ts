import { BusinessCardData } from "@/types/businessCard";

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: ${data.colors.primary};
    transition: all 0.2s ease;
  }

  .social-icon:hover {
    color: ${data.colors.secondary};
  }

  .additional-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .additional-link:hover {
    color: ${data.colors.accent};
  }
`;
