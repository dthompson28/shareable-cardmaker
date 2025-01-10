import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `<p><i data-lucide="phone"></i><a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
    ${data.email ? `<p><i data-lucide="mail"></i><a href="mailto:${data.email}">${data.email}</a></p>` : ''}
    ${data.website ? `<p><i data-lucide="globe"></i><a href="${data.website}" target="_blank">${data.website}</a></p>` : ''}
    ${data.address ? `<p><i data-lucide="map-pin"></i>${data.address}</p>` : ''}
  </div>
`;

export const generateSocialHTML = (data: BusinessCardData) => `
  <div class="social-links">
    ${Object.entries(data.social)
      .filter(([key, value]) => key !== 'additionalLinks' && value)
      .map(([key, value]) => `
        <a href="${value}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="${key}"></i>
        </a>
      `).join('')}
  </div>
`;

export const generateAdditionalLinksHTML = (data: BusinessCardData) => {
  if (!data.social.additionalLinks?.length) return '';
  
  return `
    <div class="additional-links">
      ${data.social.additionalLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer">
          <i data-lucide="arrow-right"></i>
          <span>${link.title}</span>
        </a>
      `).join('')}
    </div>
  `;
};

export const generateActionButtonsHTML = () => `
  <div class="action-buttons">
    <button class="share-button">
      <i data-lucide="share"></i>
      Share
    </button>
    <button class="save-contact-button">
      <i data-lucide="save"></i>
      Save Contact
    </button>
  </div>
`;