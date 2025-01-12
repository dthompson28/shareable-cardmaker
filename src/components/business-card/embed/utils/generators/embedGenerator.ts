import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateBaseStyles } from "./sections/baseStyles";
import { generateHeaderStyles } from "./sections/headerStyles";
import { generateContentStyles } from "./sections/contentStyles";
import { generateSocialStyles } from "./sections/socialStyles";
import { generateButtonStyles } from "./sections/buttonStyles";
import { generateScriptSection } from "./sections/scriptSection";

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${generateBaseStyles(data)}
    ${generateHeaderStyles(data)}
    ${generateContentStyles(data)}
    ${generateSocialStyles(data)}
    ${generateButtonStyles(data)}
  </style>
</head>
<body>
  <div class="business-card">
    <div class="header">
      <div class="contact-photo"></div>
      ${data.logo ? '<div class="logo"></div>' : ''}
    </div>
    
    <div class="content">
      <div class="name">${data.name}</div>
      ${data.jobTitle ? `<div class="title">${data.jobTitle}</div>` : ''}
      ${data.company ? `<div class="company">${data.company}</div>` : ''}

      <div class="contact-info">
        ${data.phone ? `
          <a href="tel:${data.phone}" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            ${data.phone}
          </a>
        ` : ''}

        ${data.email ? `
          <a href="mailto:${data.email}" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            ${data.email}
          </a>
        ` : ''}

        ${data.website ? `
          <a href="${data.website}" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            ${new URL(data.website).hostname}
          </a>
        ` : ''}
      </div>

      ${Object.values(data.social).some(value => value && typeof value === 'string') ? `
        <div class="social-links">
          ${data.social.linkedin ? `
            <a href="${data.social.linkedin}" target="_blank" class="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          ` : ''}

          ${data.social.facebook ? `
            <a href="${data.social.facebook}" target="_blank" class="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          ` : ''}

          ${data.social.instagram ? `
            <a href="${data.social.instagram}" target="_blank" class="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          ` : ''}
        </div>
      ` : ''}

      ${data.social.additionalLinks?.length ? `
        <div class="additional-links">
          ${data.social.additionalLinks.map(link => `
            <a href="${link.url}" target="_blank" class="additional-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>${link.title}</span>
            </a>
          `).join('')}
        </div>
      ` : ''}

      <div class="action-buttons">
        <button onclick="shareCard()" class="action-button share-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          Share
        </button>

        <button onclick="saveContact()" class="action-button save-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          Save Contact
        </button>
      </div>
    </div>
  </div>

  <script>
    ${generateScriptSection(data)}
  </script>
</body>
</html>`;