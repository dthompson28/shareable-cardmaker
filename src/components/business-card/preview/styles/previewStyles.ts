export const generateStyles = () => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    color: var(--primary);
    background-color: var(--background);
  }

  .business-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--background);
    width: 100%;
  }

  .business-card {
    width: 100%;
    max-width: min(90vw, 400px);
    min-width: 280px;
    background-color: var(--background);
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .business-card {
      width: 90%;
      max-width: 360px;
    }
  }

  .content {
    padding: 1.5rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
  }

  .contact-link:hover {
    background-color: var(--background);
  }

  .contact-link svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .font-playfair {
    font-family: 'Playfair Display', serif;
  }

  .font-normal {
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    font: inherit;
    cursor: pointer;
  }

  .header {
    position: relative;
    width: 100%;
    height: clamp(200px, 30vh, 250px);
    background-size: cover;
    background-position: center;
  }

  .header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  .header-content {
    position: relative;
    height: 100%;
  }

  .header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }

  .header-text {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    color: white;
  }

  .header-text h1 {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  .header-text p {
    font-size: 1.125rem;
    margin: 0.125rem 0;
    opacity: 0.9;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }

  .social-icon {
    color: var(--primary);
    transition: color 0.2s ease;
  }

  .social-icon:hover {
    color: var(--secondary);
  }

  .social-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .additional-links {
    margin: 1.5rem 0;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary);
    padding: 0.5rem;
    transition: color 0.2s ease;
  }

  .additional-link:hover {
    color: var(--accent);
  }

  .additional-link svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--accent);
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .share-button {
    background-color: var(--primary);
    color: white;
  }

  .share-button:hover {
    background-color: var(--secondary);
  }

  .save-button {
    background-color: var(--background);
    color: var(--accent);
    border: 2px solid var(--accent);
  }

  .save-button:hover {
    background-color: var(--secondary);
    color: white;
    border-color: var(--secondary);
  }
`;