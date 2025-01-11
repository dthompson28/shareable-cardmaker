import { memo } from 'react';
import { BusinessCardData } from "../../BusinessCardForm";

interface HighLevelPreviewProps {
  data: BusinessCardData;
}

export const HighLevelPreview = memo(({ data }: HighLevelPreviewProps) => {
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
              </style>
            </head>
            <body>
              ${generateHTML(data)}
              <script>
                ${generateScript()}
              </script>
            </body>
          </html>
        `}
        className="w-full h-[600px] border-0"
        title="HighLevel Preview"
      />
    </div>
  );
});

HighLevelPreview.displayName = "HighLevelPreview";

const generateStyles = () => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    color: var(--primary);
    background-color: var(--background);
  }

  .business-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: var(--background);
    width: 100%;
  }

  .business-card {
    width: 100%;
    max-width: min(90vw, 400px);
    min-width: 280px;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .business-card {
      width: 90%;
      max-width: 360px;
    }
  }

  .content {
    padding: 1.5rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--primary);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
  }

  .contact-link:hover {
    background-color: var(--background);
  }

  .contact-link svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  .font-playfair {
    font-family: 'Playfair Display', serif;
  }

  .font-normal {
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    font: inherit;
    cursor: pointer;
  }

  .header {
    position: relative;
    width: 100%;
    height: clamp(200px, 30vh, 250px);
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

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }

  .social-icon {
    color: var(--primary);
    transition: color 0.2s ease;
  }

  .social-icon:hover {
    color: var(--secondary);
  }

  .social-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .additional-links {
    margin: 1.5rem 0;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary);
    padding: 0.5rem;
    transition: color 0.2s ease;
  }

  .additional-link:hover {
    color: var(--accent);
  }

  .additional-link svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--accent);
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
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
  }

  .share-button {
    background-color: var(--primary);
    color: white;
    border: none;
  }

  .share-button:hover {
    background-color: var(--secondary);
  }

  .save-button {
    background-color: var(--background);
    color: var(--accent);
    border: 2px solid var(--accent);
  }

  .save-button:hover {
    background-color: var(--secondary);
    color: white;
    border-color: var(--secondary);
  }
`;

const generateHTML = (data: BusinessCardData) => `
  <div class="business-card-wrapper">
    <div class="business-card">
      <div class="header" style="background-image: url('${data.photo}')">
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
        <div class="contact-info">
          ${generateContactLinks(data)}
        </div>
        ${generateSocialLinks(data)}
        ${generateAdditionalLinks(data)}
        <div class="action-buttons">
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

const generateContactLinks = (data: BusinessCardData) => {
  const links = [];
  
  if (data.phone) {
    links.push(`
      <a href="tel:${data.phone}" class="contact-link font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${data.phone}
      </a>
    `);
  }

  if (data.email) {
    links.push(`
      <a href="mailto:${data.email}" class="contact-link font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        ${data.email}
      </a>
    `);
  }

  if (data.website) {
    links.push(`
      <a href="${data.website}" target="_blank" rel="noopener noreferrer" class="contact-link font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        ${new URL(data.website).hostname}
      </a>
    `);
  }

  return links.join('');
};

const generateSocialLinks = (data: BusinessCardData) => {
  const socialLinks = [];
  
  if (data.social.linkedin) {
    socialLinks.push(`
      <a href="${data.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
    `);
  }

  if (data.social.facebook) {
    socialLinks.push(`
      <a href="${data.social.facebook}" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
    `);
  }

  if (data.social.instagram) {
    socialLinks.push(`
      <a href="${data.social.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </a>
    `);
  }

  return socialLinks.length ? `<div class="social-links">${socialLinks.join('')}</div>` : '';
};

const generateAdditionalLinks = (data: BusinessCardData) => {
  if (!data.social.additionalLinks?.length) return '';

  const links = data.social.additionalLinks.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="additional-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span>${link.title}</span>
    </a>
  `).join('');

  return `<div class="additional-links">${links}</div>`;
};

const generateScript = () => `
  function saveContact() {
    const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:\${document.querySelector('.header-text h1').textContent}
TITLE:\${document.querySelector('.header-text p:nth-of-type(1)')?.textContent || ''}
ORG:\${document.querySelector('.header-text p:nth-of-type(2)')?.textContent || ''}
EMAIL;TYPE=WORK:\${document.querySelector('a[href^="mailto:"]')?.href.replace('mailto:', '') || ''}
TEL;TYPE=WORK,VOICE:\${document.querySelector('a[href^="tel:"]')?.href.replace('tel:', '') || ''}
URL:\${document.querySelector('a[href^="http"]')?.href || ''}
END:VCARD\`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = document.querySelector('.header-text h1').textContent.replace(/\\s+/g, '_') + '_Contact.vcf';
    link.click();
    URL.revokeObjectURL(url);
  }

  function shareCard() {
    if (navigator.share) {
      navigator.share({
        title: document.querySelector('.header-text h1').textContent + ' - Digital Business Card',
        text: 'Check out my digital business card!',
        url: window.location.href
      }).catch(console.error);
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = window.location.href;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Link copied to clipboard!');
    }
  }
`;