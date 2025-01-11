import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderSection = (data: BusinessCardData) => `
  <div class="header" style="background-image: url('${data.photo}');">
    <div class="header-content">
      ${data.logo ? `<img src="${data.logo}" alt="Logo" class="header-logo" />` : ''}
      <div class="header-text">
        <h1>${data.name}</h1>
        ${data.jobTitle ? `<p>${data.jobTitle}</p>` : ''}
        ${data.company ? `<p>${data.company}</p>` : ''}
      </div>
    </div>
  </div>
`;