import { BusinessCardData } from "@/types/businessCard";

export const generateHeaderSection = (data: BusinessCardData) => `
  <div class="header">
    <div class="header-overlay"></div>
    <div class="header-content">
      ${data.logo ? `<img src="${data.logo}" alt="Logo" class="header-logo" loading="lazy" />` : ''}
      <div class="header-text">
        <h1 class="font-playfair">${data.name}</h1>
        ${data.jobTitle ? `<p class="font-playfair">${data.jobTitle}</p>` : ''}
        ${data.company ? `<p class="font-playfair">${data.company}</p>` : ''}
      </div>
    </div>
  </div>
`;