import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
#digital-business-card-root.dbc-wrapper {
  all: initial;
  font-family: 'Open Sans', sans-serif;
}

#digital-business-card-root.dbc-wrapper * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#digital-business-card-root .dbc-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  background-color: ${data.colors.background};
}

#digital-business-card-root .dbc-business-card {
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
}

#digital-business-card-root .dbc-header {
  position: relative;
  width: 100%;
  height: 16rem;
  background-size: cover;
  background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
  ${data.photo ? `background-image: url('${data.photo}');` : ''}
}

#digital-business-card-root .dbc-header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

#digital-business-card-root .dbc-header-logo {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  z-index: 10;
}

#digital-business-card-root .dbc-header-text {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  z-index: 10;
}

#digital-business-card-root .dbc-content {
  padding: 1.5rem;
}

#digital-business-card-root .dbc-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

#digital-business-card-root .dbc-contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: ${data.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 0.5rem;
}

#digital-business-card-root .dbc-social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

#digital-business-card-root .dbc-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  background-color: ${data.colors.primary};
  border-radius: 50%;
  transition: all 0.2s ease;
}

#digital-business-card-root .dbc-additional-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

#digital-business-card-root .dbc-additional-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${data.colors.secondary};
  text-decoration: none;
  transition: color 0.2s ease;
}

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