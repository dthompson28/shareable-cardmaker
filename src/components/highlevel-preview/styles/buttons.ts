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
    border: none;
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
    background-color: var(--accent);
    color: white;
  }

  .save-button:hover {
    background-color: var(--primary);
  }
`;