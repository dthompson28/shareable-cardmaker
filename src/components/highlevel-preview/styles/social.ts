export const socialStyles = `
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
    margin-top: 2rem;
  }
`;