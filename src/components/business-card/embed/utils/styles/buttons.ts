export const buttonStyles = `
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
    border: none;
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

  .action-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;