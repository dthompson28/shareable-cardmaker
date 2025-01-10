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
    background-color: var(--background);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .container {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
  }

  .business-card {
    background-color: #cecabe;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;