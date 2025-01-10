import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateSocialLayoutStyles = (data: BusinessCardData) => `
  #digital-business-card-root .dbc-social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  #digital-business-card-root .dbc-social-link {
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

  #digital-business-card-root .dbc-additional-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  #digital-business-card-root .dbc-additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    transition: color 0.2s ease;
  }
`;