import { BusinessCardData } from "@/components/BusinessCardForm";

export const SocialStyles = ({ data }: { data: BusinessCardData }) => `
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 0.5rem 0;
  }
  
  .social-icon {
    color: var(--primary);
    width: 1.5rem;
    height: 1.5rem;
    transition: color 0.2s;
  }
  
  .social-icon:hover {
    color: var(--secondary);
  }
  
  .additional-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--secondary);
    text-decoration: none;
    font-size: 0.875rem;
    padding: 0.375rem;
    border-radius: 0.375rem;
    transition: all 0.2s;
  }
  
  .additional-link:hover {
    color: var(--accent);
  }
  
  .additional-link svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--accent);
  }
`;