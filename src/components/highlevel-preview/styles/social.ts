export const socialStyles = `
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

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .additional-link:hover {
    background-color: rgba(0, 103, 79, 0.1);
  }
`;