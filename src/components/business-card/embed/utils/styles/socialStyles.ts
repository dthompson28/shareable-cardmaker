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
    background-color: var(--primary);
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  .social-link:hover {
    background-color: var(--secondary);
    transform: translateY(-2px);
  }
`;