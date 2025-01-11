import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateStyles = (data: BusinessCardData) => `
/* Reset and base styles */
#digital-business-card-root *,
#digital-business-card-root *::before,
#digital-business-card-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Custom properties */
#digital-business-card-root {
    --primary: ${data.colors.primary};
    --secondary: ${data.colors.secondary};
    --accent: ${data.colors.accent};
    --background: ${data.colors.background};
    --card-max-width: 400px;
    --card-padding: 1.5rem;
    --border-radius: 0.75rem;
    --transition-duration: 0.2s;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.5;
    color: var(--primary);
}

/* Layout */
#digital-business-card-root .business-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--background);
    width: 100%;
}

#digital-business-card-root .business-card {
    width: 100%;
    max-width: var(--card-max-width);
    background-color: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

#digital-business-card-root .content {
    padding: var(--card-padding);
}

/* Header styles */
#digital-business-card-root .header {
    position: relative;
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
}

#digital-business-card-root .header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

#digital-business-card-root .header-text {
    position: absolute;
    bottom: var(--card-padding);
    left: var(--card-padding);
    color: white;
    z-index: 1;
}

#digital-business-card-root .header-text h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

#digital-business-card-root .header-text p {
    font-size: 1rem;
    opacity: 0.9;
}

/* Contact info styles */
#digital-business-card-root .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
}

#digital-business-card-root .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    border-radius: 0.5rem;
    transition: background-color var(--transition-duration);
}

#digital-business-card-root .contact-link:hover {
    background-color: color-mix(in srgb, var(--primary) 10%, transparent);
}

#digital-business-card-root .contact-link svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
}

/* Social links styles */
#digital-business-card-root .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
}

#digital-business-card-root .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    background-color: var(--primary);
    border-radius: 50%;
    transition: all var(--transition-duration);
}

#digital-business-card-root .social-link:hover {
    transform: translateY(-2px);
    background-color: var(--secondary);
}

#digital-business-card-root .social-link svg {
    width: 1.25rem;
    height: 1.25rem;
}

/* Additional links styles */
#digital-business-card-root .additional-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
}

#digital-business-card-root .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary);
    text-decoration: none;
    transition: color var(--transition-duration);
}

#digital-business-card-root .additional-link:hover {
    color: var(--accent);
}

/* Action buttons styles */
#digital-business-card-root .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

#digital-business-card-root .action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-duration);
}

#digital-business-card-root .share-button {
    background-color: var(--primary);
    color: white;
    border: none;
}

#digital-business-card-root .save-button {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

#digital-business-card-root .action-button:hover {
    opacity: 0.9;
}

/* Responsive styles */
@media (max-width: 640px) {
    #digital-business-card-root .business-card {
        border-radius: 0;
        box-shadow: none;
    }
    
    #digital-business-card-root .business-card-wrapper {
        padding: 0;
    }
    
    #digital-business-card-root .header {
        height: 200px;
    }
}

/* Print styles */
@media print {
    #digital-business-card-root .business-card-wrapper {
        padding: 0;
        min-height: auto;
    }
    
    #digital-business-card-root .business-card {
        box-shadow: none;
    }
    
    #digital-business-card-root .action-buttons {
        display: none;
    }
}`;