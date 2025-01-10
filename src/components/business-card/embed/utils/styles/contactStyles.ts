import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactStyles = (data: BusinessCardData) => `
  .content {
    padding: 1.5rem;
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-info a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 0.5rem;
  }

  .contact-info a:hover {
    background-color: ${data.colors.background};
    color: ${data.colors.secondary};
  }

  .contact-info svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;