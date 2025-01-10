export const generateResponsiveStyles = () => `
  @media (max-width: 640px) {
    #digital-business-card-root .dbc-business-card {
      max-width: 100%;
      border-radius: 0;
      box-shadow: none;
    }
    
    #digital-business-card-root .dbc-container {
      padding: 0;
    }
    
    #digital-business-card-root .dbc-header {
      height: 14rem;
    }
  }
`;