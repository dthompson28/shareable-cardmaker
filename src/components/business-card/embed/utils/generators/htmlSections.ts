import { BusinessCardData } from "@/components/BusinessCardForm";
import { getSocialIcon } from "./socialIcons";
import { getRootDomain } from "../../../utils/urlUtils";
import { generateVCard } from "@/utils/vCardGenerator";

export const generateHeaderSection = (data: BusinessCardData) => `
  <div class="header">
    <div class="header-overlay"></div>
    ${data.logo ? `
      <img 
        src="${data.logo}" 
        alt="Logo" 
        class="header-logo"
      />
    ` : ''}
    <div class="header-text">
      <h1 class="font-bold">${data.name}</h1>
      ${data.jobTitle ? `<p class="font-medium">${data.jobTitle}</p>` : ''}
      ${data.company ? `<p class="font-medium">${data.company}</p>` : ''}
    </div>
  </div>
`;

export const generateContactSection = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="contact-link font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${data.phone}
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="contact-link font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        ${data.email}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" class="contact-link font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        ${getRootDomain(data.website)}
      </a>
    ` : ''}
  </div>
`;

export const generateSocialSection = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" class="social-link">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  return `
    <div class="social-links">
      ${socialLinks}
    </div>
  `;
};

export const generateActionButtonsSection = (data: BusinessCardData) => `
  <div class="action-buttons">
    <button onclick="shareCard()" class="action-button share-button font-medium">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="button-icon">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        <polyline points="16 6 12 2 8 6"/>
        <line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
      Share
    </button>
    <button onclick="saveContact()" class="action-button save-button font-medium">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="button-icon">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
        <polyline points="17 21 17 13 7 13 7 21"/>
        <polyline points="7 3 7 8 15 8"/>
      </svg>
      Save Contact
    </button>
  </div>
`;

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
  <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
  <style>
    :root {
      --primary: #00674f;
      --secondary: #326872;
      --accent: #be5103;
      --background: #cecabe;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background-color: var(--background);
    }

    .bc-card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 0.5rem;
      background-color: var(--background);
    }

    .bc-business-card {
      width: 100%;
      max-width: 22rem;
      background-color: var(--background);
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      position: relative;
      width: 100%;
      height: 250px;
      background-image: url('${data.photo}');
      background-size: cover;
      background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
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
    }

    .header-text {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      color: white;
    }

    .header-text h1 {
      font-size: 1.75rem;
      margin: 0;
      font-weight: 700;
      font-family: 'Playfair Display', serif;
    }

    .header-text p {
      margin: 0.25rem 0;
      font-size: 1rem;
      font-family: 'Playfair Display', serif;
    }

    .content {
      padding: 1.5rem;
    }

    .contact-info a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      color: var(--primary);
      text-decoration: none;
      transition: all 0.2s ease;
      border-radius: 0.5rem;
    }

    .contact-info a:hover {
      background-color: var(--background);
      color: var(--secondary);
    }

    .contact-info svg {
      width: 1.5rem;
      height: 1.5rem;
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
      background-color: var(--primary);
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .social-link:hover {
      background-color: var(--secondary);
      transform: translateY(-2px);
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
      margin: 1rem 1.5rem;
    }

    .action-button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
      font-family: 'Open Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .save-button {
      background-color: transparent;
      color: var(--accent);
      border: 2px solid var(--accent);
    }

    .save-button:hover {
      background-color: var(--accent);
      color: white;
    }

    .share-button {
      background-color: var(--primary);
      color: white;
      border: none;
    }

    .share-button:hover {
      background-color: var(--secondary);
    }
  </style>
</head>
<body>
  <div class="bc-card-container">
    <div class="bc-business-card">
      ${generateHeaderSection(data)}
      <div class="content">
        ${generateContactSection(data)}
        ${generateSocialSection(data)}
        ${generateActionButtonsSection(data)}
      </div>
    </div>
  </div>
  <script>
    function saveContact() {
      const vcard = \`${generateVCard(data)}\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '${data.name.replace(/\s+/g, '_')}_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

    function shareCard() {
      if (navigator.share) {
        navigator.share({
          title: '${data.name} - Digital Business Card',
          text: 'Check out my digital business card!',
          url: window.location.href
        });
      } else {
        alert('Sharing is not supported on this device.');
      }
    }
  </script>
</body>
</html>`;
