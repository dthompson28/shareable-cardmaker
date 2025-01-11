import { BusinessCardData } from "@/components/BusinessCardForm";
import { getSocialIcon } from "./socialIcons";
import { generateVCard } from "./vCardGenerator";

const generateHeaderSection = (data: BusinessCardData) => `
  <div class="dbc-header">
    <div class="dbc-header-overlay"></div>
    ${data.logo ? `
      <img 
        src="${data.logo}" 
        alt="Logo" 
        class="dbc-header-logo"
      />
    ` : ''}
    <div class="dbc-header-text">
      <h1 class="dbc-font-bold">${data.name}</h1>
      ${data.jobTitle ? `<p class="dbc-font-medium">${data.jobTitle}</p>` : ''}
      ${data.company ? `<p class="dbc-font-medium">${data.company}</p>` : ''}
    </div>
  </div>
`;

const generateContactSection = (data: BusinessCardData) => `
  <div class="dbc-contact-info">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="dbc-contact-link dbc-font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${data.phone}
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="dbc-contact-link dbc-font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        ${data.email}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" class="dbc-contact-link dbc-font-normal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        ${new URL(data.website).hostname}
      </a>
    ` : ''}
  </div>
`;

const generateSocialSection = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" class="dbc-social-link">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  const additionalLinks = data.social.additionalLinks?.map(link => `
    <a href="${link.url}" target="_blank" class="dbc-additional-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="dbc-w-5 dbc-h-5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span>${link.title}</span>
    </a>
  `).join('') || '';

  return `
    <div class="dbc-social-links">
      ${socialLinks}
    </div>
    ${additionalLinks ? `
      <div class="dbc-additional-links">
        ${additionalLinks}
      </div>
    ` : ''}
  `;
};

const generateActionButtonsSection = (data: BusinessCardData) => `
  <div class="action-buttons">
    <button onclick="shareCard()" class="action-button share-button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        <polyline points="16 6 12 2 8 6"/>
        <line x1="12" y1="2" x2="12" y2="15"/>
      </svg>
      Share
    </button>
    <button onclick="saveContact()" class="action-button save-button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
        <polyline points="17 21 17 13 7 13 7 21"/>
        <polyline points="7 3 7 8 15 8"/>
      </svg>
      Save Contact
    </button>
  </div>
`;

const generateScriptContent = (data: BusinessCardData) => `
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

export {
  generateHeaderSection,
  generateContactSection,
  generateSocialSection,
  generateActionButtonsSection,
  generateScriptContent,
};