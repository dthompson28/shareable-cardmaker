export const baseStyles = `
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
    background-color: white;
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
`;