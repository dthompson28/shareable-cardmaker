import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `<p><a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
    ${data.email ? `<p><a href="mailto:${data.email}">${data.email}</a></p>` : ''}
    ${data.website ? `<p><a href="${data.website}" target="_blank">${data.website}</a></p>` : ''}
    ${data.address ? `<p>${data.address}</p>` : ''}
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
        <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>
      `).join('')}
    </div>
  `;
};