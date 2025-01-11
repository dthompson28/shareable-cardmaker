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
    // Highlight corresponding section in BusinessCard preview
    const businessCardSection = document.querySelector(`[data-section="${section}"]`);
    if (businessCardSection) {
      businessCardSection.classList.add('ring-2', 'ring-brand-primary');
      setTimeout(() => {
        businessCardSection.classList.remove('ring-2', 'ring-brand-primary');
      }, 2000);
    }
    console.log('Selected section:', section);
  };

  const generateHTML = (data: BusinessCardData) => `
    <div class="business-card-wrapper">
      <div class="business-card">
        <div class="header section-highlight" data-section="header" onclick="window.handleSectionClick('header')">
          <div class="header-overlay"></div>
          <div class="header-content">
            ${data.logo ? `<img src="${data.logo}" alt="Logo" class="header-logo" loading="lazy" />` : ''}
            <div class="header-text">
              <h1 class="font-playfair">${data.name}</h1>
              ${data.jobTitle ? `<p class="font-playfair">${data.jobTitle}</p>` : ''}
              ${data.company ? `<p class="font-playfair">${data.company}</p>` : ''}
            </div>
          </div>
        </div>
        <div class="content">
          <div class="contact-info section-highlight" data-section="contact" onclick="window.handleSectionClick('contact')">
            ${generateContactLinks(data)}
          </div>
          <div class="section-highlight" data-section="social" onclick="window.handleSectionClick('social')">
            ${generateSocialLinks(data)}
          </div>
          <div class="section-highlight" data-section="additional" onclick="window.handleSectionClick('additional')">
            ${generateAdditionalLinks(data)}
          </div>
          <div class="action-buttons section-highlight" data-section="actions" onclick="window.handleSectionClick('actions')">
            <button onclick="shareCard()" class="action-button share-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share
            </button>
            <button onclick="saveContact()" class="action-button save-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    <div className="h-full w-full">
      <iframe
        srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
              <meta name="format-detection" content="telephone=no">
              <title>${data.name} - Digital Business Card</title>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
              <style>
                :root {
                  --primary: ${data.colors.primary};
                  --secondary: ${data.colors.secondary};
                  --accent: ${data.colors.accent};
                  --background: ${data.colors.background};
                }
                ${generateStyles()}
                .section-highlight {
                  cursor: pointer;
                  transition: all 0.2s ease;
                }
                .section-highlight:hover {
                  outline: 2px solid var(--primary);
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
        className="w-full h-[600px] border-0"
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