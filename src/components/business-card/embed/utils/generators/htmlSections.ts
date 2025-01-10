import { BusinessCardData } from "@/components/BusinessCardForm";
import { getSocialIcon } from "./socialIcons";

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
      <h1>${data.name}</h1>
      ${data.jobTitle ? `<p>${data.jobTitle}</p>` : ''}
      ${data.company ? `<p>${data.company}</p>` : ''}
    </div>
  </div>
`;

export const generateContactSection = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `
      <a href="tel:${data.phone}">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        ${data.phone}
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M16 12H4m12 0H4m8 0l4-4-4 4-4-4m4 4l4 4"></path>
        </svg>
        ${data.email}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M10 9V3h4v6h5l-7 8-7-8h5z"></path>
        </svg>
        ${data.website}
      </a>
    ` : ''}
  </div>
`;

export const generateSocialSection = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  return `
    <div class="social-links">
      ${socialLinks}
    </div>
    ${generateAdditionalLinksSection(data)}
  `;
};

export const generateAdditionalLinksSection = (data: BusinessCardData) => {
  if (!data.social.additionalLinks?.length) return '';
  
  return data.social.additionalLinks.map(link => `
    <a href="${link.url}" class="additional-link" target="_blank">
      <svg class="additional-link-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7"></path>
      </svg>
      ${link.title}
    </a>
  `).join('');
};

export const generateActionButtonsSection = (data: BusinessCardData) => `
  <div class="action-buttons">
    <button onclick="saveContact()">Save Contact</button>
    <button onclick="shareCard()">Share Card</button>
  </div>
`;