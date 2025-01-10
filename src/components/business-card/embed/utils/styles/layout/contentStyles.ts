import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContentLayoutStyles = (data: BusinessCardData) => `
  #digital-business-card-root .dbc-content {
    padding: 1.5rem;
  }

  #digital-business-card-root .dbc-contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  #digital-business-card-root .dbc-contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: ${data.colors.primary};
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 0.5rem;
  }
`;