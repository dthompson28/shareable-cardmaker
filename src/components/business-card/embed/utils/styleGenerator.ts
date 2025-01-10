import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateBaseStyles } from "./styles/baseStyles";
import { generateContactStyles } from "./styles/contactStyles";
import { generateSocialStyles } from "./styles/socialStyles";
import { generateActionStyles } from "./styles/actionStyles";

export const generateStyles = (data: BusinessCardData) => `
  /* Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${data.colors.background};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Layout */
  .card-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  /* Card Styles */
  .business-card {
    background: white;
    max-width: 28rem;
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    contain: content;
  }

  /* Header Section */
  .header {
    background-color: ${data.colors.primary};
    height: 12rem;
    position: relative;
  }

  .logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 4rem;
    width: 4rem;
    object-fit: contain;
    background: white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    will-change: transform;
  }

  /* Profile Section */
  .profile {
    margin-top: -4rem;
    padding: 0 2rem;
    text-align: center;
  }

  .profile-image {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 4px solid white;
    margin: 0 auto;
    object-fit: cover;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    will-change: transform;
  }

  .name {
    color: ${data.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem;
  }

  .company {
    color: ${data.colors.secondary};
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  /* Contact Info */
  .contact-info {
    padding: 0 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${data.colors.secondary};
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color 0.2s;
  }

  .contact-item:hover {
    color: ${data.colors.primary};
  }

  /* Social Links */
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .social-link {
    color: ${data.colors.secondary};
    transition: color 0.2s;
  }

  .social-link:hover {
    color: ${data.colors.primary};
  }

  /* Buttons */
  .buttons {
    display: flex;
    gap: 1rem;
    padding: 0 1.5rem 1.5rem;
  }

  .button {
    flex: 1;
    padding: 0.75rem;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: white;
    transition: opacity 0.2s;
    will-change: opacity;
  }

  .button:hover {
    opacity: 0.9;
  }

  .share-button {
    background-color: ${data.colors.secondary};
  }

  .save-button {
    background-color: ${data.colors.accent};
  }

  /* Loading State */
  .loading {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .loaded {
    opacity: 1;
  }
`;