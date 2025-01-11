import { BusinessCardData } from "@/components/BusinessCardForm";
import { getSocialIcon } from "../socialIcons";

export const generateSocialSection = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" class="social-icon">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  const additionalLinks = data.social.additionalLinks?.map(link => `
    <a href="${link.url}" target="_blank" class="additional-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span>${link.title}</span>
    </a>
  `).join('') || '';

  return `
    <div class="social-links">
      ${socialLinks}
    </div>
    ${additionalLinks ? `
      <div class="additional-links">
        ${additionalLinks}
      </div>
    ` : ''}
  `;
};