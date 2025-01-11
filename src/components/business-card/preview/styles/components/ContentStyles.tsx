import { BusinessCardData } from "@/components/BusinessCardForm";

export const ContentStyles = ({ data }: { data: BusinessCardData }) => `
  .content {
    flex: 1;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    font-size: 0.875rem;
    padding: 0.375rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
  }
  
  .contact-link:hover {
    background-color: rgba(0, 103, 79, 0.1);
  }
  
  .contact-link svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }
`;