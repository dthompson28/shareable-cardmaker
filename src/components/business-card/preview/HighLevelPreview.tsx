import { memo, useState } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";
import { generateStyles } from './styles/previewStyles';
import { generateContactLinks } from './generators/ContactLinksGenerator';
import { generateSocialLinks } from './generators/SocialLinksGenerator';
import { generateAdditionalLinks } from './generators/AdditionalLinksGenerator';
import { generateScript } from './generators/ScriptGenerator';

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

type PreviewSection = 'header' | 'contact' | 'social' | 'additional' | 'actions' | null;

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
  const [selectedSection, setSelectedSection] = useState<PreviewSection>(null);

  const handleSectionClick = (section: PreviewSection) => {
    setSelectedSection(section);
    const businessCardSection = document.querySelector(`[data-section="${section}"]`);
    if (businessCardSection) {
      businessCardSection.classList.add('ring-2', 'ring-brand-primary');
      setTimeout(() => {
        businessCardSection.classList.remove('ring-2', 'ring-brand-primary');
      }, 2000);
    }
  };

  const generateHTML = (data: BusinessCardData) => `
    <div class="business-card-wrapper">
      <div class="business-card">
        <div 
          class="header section-highlight ${selectedSection === 'header' ? 'section-selected' : ''}" 
          data-section="header" 
          onclick="window.handleSectionClick('header')"
          style="background-image: url('${data.photo}'); background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;"
        >
          <div class="header-overlay"></div>
          <div class="header-content">
            ${data.logo ? `<img src="${data.logo}" alt="Logo" class="header-logo" loading="lazy" />` : ''}
            <div class="header-text">
              <h1 class="text-2xl font-bold mb-1">${data.name}</h1>
              ${data.jobTitle ? `<p class="text-base opacity-90">${data.jobTitle}</p>` : ''}
              ${data.company ? `<p class="text-base opacity-90">${data.company}</p>` : ''}
            </div>
          </div>
        </div>
        <div class="content">
          <div 
            class="contact-info section-highlight ${selectedSection === 'contact' ? 'section-selected' : ''}" 
            data-section="contact" 
            onclick="window.handleSectionClick('contact')"
          >
            ${generateContactLinks(data)}
          </div>
          <div 
            class="section-highlight ${selectedSection === 'social' ? 'section-selected' : ''}" 
            data-section="social" 
            onclick="window.handleSectionClick('social')"
          >
            ${generateSocialLinks(data)}
          </div>
          <div 
            class="section-highlight ${selectedSection === 'additional' ? 'section-selected' : ''}" 
            data-section="additional" 
            onclick="window.handleSectionClick('additional')"
          >
            ${generateAdditionalLinks(data)}
          </div>
          <div 
            class="action-buttons section-highlight ${selectedSection === 'actions' ? 'section-selected' : ''}" 
            data-section="actions" 
            onclick="window.handleSectionClick('actions')"
          >
            <button onclick="shareCard()" class="action-button share-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share
            </button>
            <button onclick="saveContact()" class="action-button save-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Save Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <div className="h-[500px] w-full flex items-center justify-center">
      <iframe
        srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
              <title>${data.name} - Digital Business Card</title>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
              <style>
                :root {
                  --primary: ${data.colors.primary};
                  --secondary: ${data.colors.secondary};
                  --accent: ${data.colors.accent};
                  --background: ${data.colors.background};
                }
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                body {
                  font-family: 'Open Sans', sans-serif;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                }
                .business-card-wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 500px;
                  width: 448px;
                  overflow: hidden;
                }
                .business-card {
                  width: 448px !important;
                  height: 500px !important;
                  margin: 0 !important;
                  overflow: hidden !important;
                  display: flex !important;
                  flex-direction: column !important;
                  background-color: white;
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .header {
                  position: relative;
                  width: 100%;
                  height: 160px;
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                }
                .header-overlay {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
                }
                .header-content {
                  position: relative;
                  height: 100%;
                  padding: 1rem;
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
                  bottom: 1rem;
                  left: 1rem;
                  color: white;
                }
                .content {
                  flex: 1;
                  padding: 1rem;
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                }
                .contact-info {
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                }
                .contact-link {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                  color: var(--primary);
                  text-decoration: none;
                  font-size: 0.875rem;
                  padding: 0.25rem;
                  border-radius: 0.25rem;
                }
                .contact-link svg {
                  width: 1.25rem;
                  height: 1.25rem;
                  flex-shrink: 0;
                }
                .social-links {
                  display: flex;
                  justify-content: center;
                  gap: 1rem;
                  margin: 0.5rem 0;
                }
                .social-icon {
                  color: var(--primary);
                  width: 1.5rem;
                  height: 1.5rem;
                }
                .additional-links {
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                }
                .additional-link {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                  color: var(--secondary);
                  text-decoration: none;
                  font-size: 0.875rem;
                }
                .action-buttons {
                  display: flex;
                  gap: 0.5rem;
                  margin-top: auto;
                }
                .action-button {
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.5rem;
                  padding: 0.5rem;
                  border-radius: 0.25rem;
                  font-size: 0.875rem;
                  cursor: pointer;
                  border: none;
                }
                .share-button {
                  background-color: var(--primary);
                  color: white;
                }
                .save-button {
                  background-color: white;
                  color: var(--primary);
                  border: 1px solid var(--primary);
                }
                .section-highlight:hover {
                  outline: 2px solid var(--primary);
                  outline-offset: 2px;
                }
                .section-selected {
                  outline: 3px solid var(--accent) !important;
                  outline-offset: 2px;
                }
              </style>
            </head>
            <body>
              ${generateHTML(data)}
              <script>
                ${generateScript(data)}
                window.handleSectionClick = function(section) {
                  window.parent.postMessage({ type: 'sectionClick', section }, '*');
                }
              </script>
            </body>
          </html>
        `}
        className="w-[448px] h-[500px] border-0"
        title="HighLevel Preview"
        onLoad={() => {
          window.addEventListener('message', (event) => {
            if (event.data.type === 'sectionClick') {
              handleSectionClick(event.data.section);
            }
          });
        }}
      />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";