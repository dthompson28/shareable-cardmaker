import { BusinessCardData } from "@/components/BusinessCardForm";

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
      <h1 class="font-bold">${data.name}</h1>
      ${data.jobTitle ? `<p class="font-medium">${data.jobTitle}</p>` : ''}
      ${data.company ? `<p class="font-medium">${data.company}</p>` : ''}
    </div>
  </div>
`;