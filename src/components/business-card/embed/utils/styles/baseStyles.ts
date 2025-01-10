import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateBaseStyles = (data: BusinessCardData) => `
.business-card-wrapper {
  --primary: ${data.colors.primary};
  --secondary: ${data.colors.secondary};
  --accent: ${data.colors.accent};
  --background: ${data.colors.background};
}

.business-card-wrapper * {
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
  width: 100%;
  max-width: 100vw;
  padding: 1rem;
  background-color: var(--background);
}

.business-card {
  width: 100%;
  max-width: 22rem;
  background-color: var(--background);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.business-card .header {
  position: relative;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: \${data.photoPosition.x}% \${data.photoPosition.y}%;
  ${data.photo ? `background-image: url('${data.photo}');` : ''}
}

.business-card .header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.business-card .header-logo {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.business-card .header-text {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
}

.business-card .header-text h1 {
  font-size: 1.75rem;
  margin: 0;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.business-card .header-text p {
  margin: 0.25rem 0;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
}

.business-card .contact-info a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  color: var(--primary);
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 0.5rem;
  font-weight: 400;
}

.business-card .contact-info a:hover {
  background-color: var(--background);
  color: var(--secondary);
}

.business-card .contact-info svg {
  width: 1.5rem;
  height: 1.5rem;
  stroke: var(--primary);
  fill: none;
}

.business-card .social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.business-card .social-link {
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

.business-card .social-link:hover {
  background-color: var(--secondary);
  transform: translateY(-2px);
}

.business-card .additional-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  margin-top: 1rem;
}

.business-card .additional-link:hover {
  color: var(--secondary);
}

.business-card .action-buttons {
  display: flex;
  gap: 1rem;
  margin: 1rem 1.5rem;
}

.business-card .action-button {
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

.business-card .action-button.save-button {
  background-color: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.business-card .action-button.save-button:hover {
  background-color: var(--accent);
  color: white;
}

.business-card .action-button.share-button {
  background-color: var(--primary);
  color: white;
}

.business-card .action-button.share-button:hover {
  background-color: var(--secondary);
}

@media (max-width: 640px) {
  .business-card {
    border-radius: 0;
    box-shadow: none;
  }
  
  .business-card-wrapper {
    padding: 0;
  }
}
`;