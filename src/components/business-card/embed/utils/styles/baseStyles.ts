import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.business-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  background-color: ${data.colors.background};
}

.business-card {
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.header {
  position: relative;
  width: 100%;
  height: 16rem;
  background-size: cover;
  background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
  ${data.photo ? `background-image: url('${data.photo}');` : ''}
}

.header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.header-logo {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  z-index: 10;
}

.header-text {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: white;
  z-index: 10;
}

.header-text h1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-text p {
  font-size: 1.25rem;
  margin: 0.25rem 0;
  font-family: 'Playfair Display', serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  padding: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: ${data.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 0.5rem;
  font-family: 'Open Sans', sans-serif;
}

.contact-link:hover {
  background-color: ${data.colors.background};
}

.contact-link svg {
  width: 1.5rem;
  height: 1.5rem;
  stroke: ${data.colors.primary};
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.social-link {
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

.social-link:hover {
  background-color: ${data.colors.secondary};
  transform: translateY(-2px);
}

.social-link svg {
  width: 1.25rem;
  height: 1.25rem;
  stroke: currentColor;
}

.additional-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.additional-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${data.colors.secondary};
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  transition: color 0.2s ease;
}

.additional-link:hover {
  color: ${data.colors.accent};
}

.additional-link svg {
  width: 1.25rem;
  height: 1.25rem;
  stroke: ${data.colors.accent};
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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
  font-family: 'Open Sans', sans-serif;
}

.action-button.save-button {
  background-color: transparent;
  color: ${data.colors.accent};
  border: 2px solid ${data.colors.accent};
}

.action-button.save-button:hover {
  background-color: ${data.colors.accent};
  color: white;
}

.action-button.share-button {
  background-color: ${data.colors.primary};
  color: white;
  border: none;
}

.action-button.share-button:hover {
  background-color: ${data.colors.secondary};
}

@media (max-width: 640px) {
  .business-card {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
  
  .business-card-wrapper {
    padding: 0;
  }
  
  .header {
    height: 14rem;
  }
  
  .header-text h1 {
    font-size: 1.5rem;
  }
  
  .header-text p {
    font-size: 1rem;
  }
}
`;