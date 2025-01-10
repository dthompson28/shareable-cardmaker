import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateStyles = (data: BusinessCardData) => `
  :root {
    --primary: ${data.colors.primary};
    --secondary: ${data.colors.secondary};
    --accent: ${data.colors.accent};
    --background: ${data.colors.background};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: var(--background);
  }

  .bc-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--background);
  }

  .bc-business-card {
    width: 100%;
    max-width: 22rem;
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .header {
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url('${data.photo}');
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
  }

  .header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  .header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }

  .header-text {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: white;
  }

  .header-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
  }

  .header-text p {
    font-family: 'Playfair Display', serif;
    margin: 0.25rem 0;
    font-size: 1.25rem;
  }

  .content {
    padding: 1.5rem;
  }

  .contact-info a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    transition: all 0.2s ease;
    border-radius: 0.5rem;
  }

  .contact-info a:hover {
    background-color: var(--background);
    color: var(--secondary);
  }

  .contact-info svg {
    width: 1.5rem;
    height: 1.5rem;
  }

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

  .social-link svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    margin-top: 1rem;
    transition: color 0.2s ease;
  }

  .additional-link:hover {
    color: var(--secondary);
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  @media (max-width: 640px) {
    .bc-card-container {
      padding: 0.5rem;
    }

    .bc-business-card {
      max-width: 18rem;
    }

    .header {
      height: 250px;
    }

    .action-buttons {
      flex-direction: column;
    }
  }
`;