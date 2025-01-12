import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContentStyles = (data: BusinessCardData) => `
  .content {
    padding: 120px 24px 24px;
  }

  .name {
    font-size: 28px;
    margin-bottom: 4px;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
    color: ${data.colors.primary};
  }

  .title {
    font-size: 18px;
    font-family: 'Playfair Display', serif;
    color: ${data.colors.secondary};
    margin: 2px 0;
  }

  .company {
    font-size: 18px;
    font-family: 'Playfair Display', serif;
    color: ${data.colors.accent};
    margin: 2px 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${data.colors.primary};
    text-decoration: none;
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;
  }

  .contact-link:hover {
    background-color: ${data.colors.primary}1a;
  }
`;