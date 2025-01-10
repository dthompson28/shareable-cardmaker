export const socialStyles = `
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
    width: 1.25rem;
    height: 1.25rem;
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
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .action-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .share-button {
    background-color: var(--primary);
    color: white;
  }

  .save-button {
    background-color: var(--accent);
    color: white;
  }

  .action-button:hover {
    opacity: 0.9;
  }
`;