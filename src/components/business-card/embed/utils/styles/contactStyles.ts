import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactStyles = (data: BusinessCardData) => `
  .content {
    padding: 2rem;
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .contact-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: ${data.colors.primary};
  }

  .contact-info a {
    color: ${data.colors.primary};
    text-decoration: none;
    font-size: 1.125rem;
    transition: opacity 0.2s;
  }
`;