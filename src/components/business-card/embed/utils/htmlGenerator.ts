import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `
      <div class="contact-item">
        <i data-lucide="phone" class="contact-icon"></i>
        <a href="tel:${data.phone}">${data.phone}</a>
      </div>
    ` : ''}
    ${data.email ? `
      <div class="contact-item">
        <i data-lucide="mail" class="contact-icon"></i>
        <a href="mailto:${data.email}">${data.email}</a>
      </div>
    ` : ''}
    ${data.website ? `
      <div class="contact-item">
        <i data-lucide="globe" class="contact-icon"></i>
        <a href="${data.website}" target="_blank">${data.website}</a>
      </div>
    ` : ''}
  </div>
`;

export const generateHeaderHTML = (data: BusinessCardData) => `
  <div class="photo-header">
    <div class="photo-container">
      ${data.photo ? '<div class="photo"></div>' : ''}
      <div class="header-content">
        <h2 class="name">${data.name}</h2>
        ${data.jobTitle ? `<p class="job-title">${data.jobTitle}</p>` : ''}
        ${data.company ? `<p class="company">${data.company}</p>` : ''}
      </div>
    </div>
    ${data.logo ? '<div class="logo"></div>' : ''}
  </div>
`;

export const generateSocialHTML = (data: BusinessCardData) => `
  <div class="social-links">
    ${Object.entries(data.social)
      .filter(([key, value]) => key !== 'additionalLinks' && value)
      .map(([key, value]) => {
        const iconName = key === 'twitter' ? 'twitter-x' : key;
        return `
          <a href="${value}" target="_blank" rel="noopener noreferrer" class="social-link">
            <i data-lucide="${iconName}" class="social-icon"></i>
          </a>
        `;
      }).join('')}
  </div>
`;

export const generateAdditionalLinksHTML = (data: BusinessCardData) => {
  if (!data.social.additionalLinks?.length) return '';
  
  return `
    <div class="additional-links">
      ${data.social.additionalLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="additional-link">
          <i data-lucide="arrow-right" class="additional-link-icon"></i>
          <span>${link.title}</span>
        </a>
      `).join('')}
    </div>
  `;
};

export const generateActionButtonsHTML = () => `
  <div class="action-buttons">
    <button class="share-button">
      <i data-lucide="share-2"></i>
      Share
    </button>
    <button class="save-contact-button">
      <i data-lucide="download"></i>
      Save Contact
    </button>
  </div>
`;