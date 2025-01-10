import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateSocialStyles = (data: BusinessCardData) => `
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background-color: ${data.colors.primary};
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  .social-link:hover {
    background-color: ${data.colors.secondary};
    transform: translateY(-2px);
  }

  .social-link svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .additional-links {
    margin: 1.5rem 0;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${data.colors.primary};
    font-weight: bold;
    margin-bottom: 0.75rem;
  }

  .additional-link:hover {
    color: ${data.colors.secondary};
  }

  .additional-link-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
`;