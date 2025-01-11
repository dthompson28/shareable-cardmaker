import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderSection = (data: BusinessCardData) => `
  <div class="bc-header">
    <div class="bc-header-overlay"></div>
    <div class="bc-header-content">
      ${data.logo ? `<img src="${data.logo}" alt="Logo" class="bc-header-logo" />` : ''}
      ${data.photoStyle === 'compact' ? `<div class="bc-header-photo"></div>` : ''}
      <div class="bc-header-text">
        <h1>${data.name}</h1>
        ${data.jobTitle ? `<p>${data.jobTitle}</p>` : ''}
        ${data.company ? `<p>${data.company}</p>` : ''}
      </div>
    </div>
  </div>
`;