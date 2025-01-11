import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateAdditionalLinks = (data: BusinessCardData) => {
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