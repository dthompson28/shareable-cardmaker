export const contentStyles = `
  .content {
    padding: 1.5rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .contact-link:hover {
    background-color: rgba(0, 103, 79, 0.1);
  }
`;