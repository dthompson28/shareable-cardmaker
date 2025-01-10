import { BusinessCardData } from "@/components/BusinessCardForm";
import { getSocialIcon } from "./socialIcons";

export const generateHeaderSection = (data: BusinessCardData) => `
  <div class="relative w-full h-[400px] overflow-hidden rounded-t-3xl">
    ${data.photo ? `
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('${data.photo}'); background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%"
      ></div>
    ` : ''}
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    ${data.logo ? `
      <img 
        src="${data.logo}"
        alt="Company Logo"
        class="absolute top-6 right-6 w-20 h-20 object-contain z-10"
      />
    ` : ''}
    <div class="absolute bottom-0 left-0 p-8 text-white z-10">
      <h1 class="text-4xl font-bold mb-2 font-playfair">${data.name}</h1>
      ${data.jobTitle ? `<p class="text-xl mb-1 font-playfair">${data.jobTitle}</p>` : ''}
      ${data.company ? `<p class="text-lg opacity-90 font-playfair">${data.company}</p>` : ''}
    </div>
  </div>
`;

export const generateContactSection = (data: BusinessCardData) => `
  <div class="space-y-4 p-6">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="flex items-center space-x-3 text-[${data.colors.primary}] hover:text-[${data.colors.secondary}] font-opensans">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span>${data.phone}</span>
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="flex items-center space-x-3 text-[${data.colors.primary}] hover:text-[${data.colors.secondary}] font-opensans">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span>${data.email}</span>
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" class="flex items-center space-x-3 text-[${data.colors.primary}] hover:text-[${data.colors.secondary}] font-opensans">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
        <span>${data.website}</span>
      </a>
    ` : ''}
  </div>
`;

export const generateSocialSection = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" class="bg-[${data.colors.primary}] p-3 rounded-lg text-white hover:bg-[${data.colors.primary}]/90">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  return `
    <div class="flex justify-center space-x-4 p-6">
      ${socialLinks}
    </div>
  `;
};

export const generateAdditionalLinksSection = (data: BusinessCardData) => {
  if (!data.social.additionalLinks?.length) return '';
  
  const links = data.social.additionalLinks.map(link => `
    <a 
      href="${link.url}" 
      target="_blank" 
      class="block w-full px-4 py-2 rounded text-center transition-all duration-200 font-opensans"
      style="
        background-color: ${data.colors.background};
        color: ${data.colors.primary};
        border: 1px solid ${data.colors.primary};
      "
    >
      ${link.title}
    </a>
  `).join('');

  return `
    <div class="space-y-3 p-6">
      ${links}
    </div>
  `;
};

export const generateActionButtonsSection = (data: BusinessCardData) => `
  <div class="grid grid-cols-2 gap-4 p-6">
    <button 
      onclick="bcSaveContact()" 
      class="px-4 py-2 rounded font-opensans transition-all duration-200"
      style="
        background-color: ${data.colors.primary};
        color: white;
      "
    >
      Save Contact
    </button>
    <button 
      onclick="bcShareCard()" 
      class="px-4 py-2 rounded font-opensans transition-all duration-200"
      style="
        background-color: ${data.colors.primary};
        color: white;
      "
    >
      Share Card
    </button>
  </div>
`;