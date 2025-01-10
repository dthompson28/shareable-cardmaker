export const headerStyles = `
  .header {
    position: relative;
    height: 250px;
    background-image: url('https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/67492bc96a2894272f8c25d7.jpeg');
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
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header-logo {
    align-self: flex-end;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }

  .header-text {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .header-text p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;