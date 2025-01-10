export const headerStyles = `
  .header {
    position: relative;
    width: 100%;
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
  }

  .header-logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }

  .header-text {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    color: white;
  }

  .header-text h1 {
    font-size: 1.75rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  .header-text p {
    font-size: 1.125rem;
    margin: 0.125rem 0;
    opacity: 0.9;
  }
`;