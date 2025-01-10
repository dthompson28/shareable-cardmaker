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
    max-width: 600px;
    background-color: var(--background);
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }

  .header {
    position: relative;
    width: 100%;
    height: 400px;
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
    font-size: 2rem;
    margin: 0;
  }

  .header-text p {
    margin: 0.25rem 0;
    font-size: 1.25rem;
  }

  .content {
    padding: 1.5rem;
  }

  .contact-info a {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    text-decoration: none;
    color: ${data.colors.primary};
    transition: color 0.2s;
  }

  .contact-info a:hover {
    color: ${data.colors.secondary};
  }

  .contact-info a svg {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background-color: ${data.colors.primary};
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  .social-links a:hover {
    background-color: ${data.colors.secondary};
  }

  .social-links a svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .action-buttons button {
    flex: 1;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-weight: bold;
    background-color: ${data.colors.primary};
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .action-buttons button:hover {
    background-color: ${data.colors.secondary};
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${data.colors.primary};
    font-weight: bold;
    margin-top: 1rem;
    transition: color 0.2s;
  }

  .additional-link:hover {
    color: ${data.colors.secondary};
  }

  .additional-link-icon {
    width: 1rem;
    height: 1rem;
  }
`;
