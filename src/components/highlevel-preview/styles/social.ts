export const socialStyles = `
  /* Social Links */
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
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
    transform: translateY(-2px);
    background-color: var(--secondary);
  }

  /* Action Buttons */
  .action-buttons .action-button {
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

  .action-buttons .share-button {
    background-color: var(--primary);
    color: white;
  }

  .action-buttons .save-button {
    background-color: var(--accent);
    color: white;
  }

  .action-buttons .action-button:hover {
    opacity: 0.9;
  }

  /* Inline SVG Styling */
  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: currentColor;
  }
`;