import { BusinessCardData } from "@/components/BusinessCardForm";
import { getSocialIcon } from "../socialIcons";

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