import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="contact-item">
        <i data-lucide="phone"></i>
        <span>${data.phone}</span>
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="contact-item">
        <i data-lucide="mail"></i>
        <span>${data.email}</span>
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" rel="noopener noreferrer" class="contact-item">
        <i data-lucide="globe"></i>
        <span>${data.website}</span>
      </a>
    ` : ''}
    ${data.address ? `
      <div class="contact-item">
        <i data-lucide="map-pin"></i>
        <span>${data.address}</span>
      </div>
    ` : ''}
  </div>`;

export const generateSocialHTML = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value);

  if (socialLinks.length === 0) return '';

  return `
    <div class="social-links">
      ${data.social.linkedin ? `
        <a href="${data.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">
          <i data-lucide="linkedin"></i>
        </a>
      ` : ''}
      ${data.social.facebook ? `
        <a href="${data.social.facebook}" target="_blank" rel="noopener noreferrer" class="social-link">
          <i data-lucide="facebook"></i>
        </a>
      ` : ''}
      ${data.social.instagram ? `
        <a href="${data.social.instagram}" target="_blank" rel="noopener noreferrer" class="social-link">
          <i data-lucide="instagram"></i>
        </a>
      ` : ''}
      ${data.social.twitter ? `
        <a href="${data.social.twitter}" target="_blank" rel="noopener noreferrer" class="social-link">
          <i data-lucide="twitter"></i>
        </a>
      ` : ''}
      ${data.social.youtube ? `
        <a href="${data.social.youtube}" target="_blank" rel="noopener noreferrer" class="social-link">
          <i data-lucide="youtube"></i>
        </a>
      ` : ''}
      ${data.social.tiktok ? `
        <a href="${data.social.tiktok}" target="_blank" rel="noopener noreferrer" class="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
      ` : ''}
      ${data.social.whatsapp ? `
        <a href="${data.social.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-link">
          <i data-lucide="phone"></i>
        </a>
      ` : ''}
    </div>`;
};

export const generateAdditionalLinksHTML = (data: BusinessCardData) => {
  if (!data.social.additionalLinks?.length) return '';

  return `
    <div class="additional-links">
      ${data.social.additionalLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="additional-link">
          <i data-lucide="external-link"></i>
          <span>${link.title}</span>
        </a>
      `).join('')}
    </div>`;
};