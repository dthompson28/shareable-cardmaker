import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderSection = (data: BusinessCardData) => `
  <div class="dbc-header">
    <div class="dbc-header-overlay"></div>
    ${data.logo ? `
      <img 
        src="${data.logo}" 
        alt="Logo" 
        class="dbc-header-logo"
      />
    ` : ''}
    <div class="dbc-header-text">
      <h1 class="dbc-font-bold">${data.name}</h1>
      ${data.jobTitle ? `<p class="dbc-font-medium">${data.jobTitle}</p>` : ''}
      ${data.company ? `<p class="dbc-font-medium">${data.company}</p>` : ''}
    </div>
  </div>
`;