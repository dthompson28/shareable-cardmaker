import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderHTML = (data: BusinessCardData) => `
  <div class="bc-header">
    ${data.logo ? `
      <img 
        src="${data.logo}" 
        alt="Logo" 
        class="bc-logo"
        loading="eager"
        decoding="async"
      />
    ` : ''}
    ${data.photoStyle === 'full' ? `
      <div class="bc-profile">
        <h1 class="bc-name">${data.name}</h1>
        ${data.jobTitle ? `<h2 class="bc-job-title">${data.jobTitle}</h2>` : ''}
        ${data.company ? `<h2 class="bc-company">${data.company}</h2>` : ''}
      </div>
    ` : ''}
  </div>
  ${data.photoStyle !== 'full' ? `
    <div class="bc-profile">
      ${data.photo ? `
        <img 
          src="${data.photo}" 
          alt="${data.name}" 
          class="bc-profile-image"
          loading="eager"
          decoding="async"
        />
      ` : ''}
      <h1 class="bc-name">${data.name}</h1>
      ${data.jobTitle ? `<h2 class="bc-job-title">${data.jobTitle}</h2>` : ''}
      ${data.company ? `<h2 class="bc-company">${data.company}</h2>` : ''}
    </div>
  ` : ''}
`;

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="bc-contact-info">
    ${data.email ? `
      <a href="mailto:${data.email}" class="bc-contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        ${data.email}
      </a>
    ` : ''}
    ${data.phone ? `
      <a href="tel:${data.phone}" class="bc-contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        ${data.phone}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" rel="noopener noreferrer" class="bc-contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        ${data.website}
      </a>
    ` : ''}
  </div>
`;

export const generateSocialHTML = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="bc-social-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
    `).join('');

  const additionalLinks = data.social.additionalLinks?.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="bc-contact-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
      ${link.title}
    </a>
  `).join('') || '';

  return `
    <div class="bc-social-links">
      ${socialLinks}
      ${additionalLinks}
    </div>
  `;
};

export const generateActionButtonsHTML = () => `
  <div class="bc-buttons">
    <button class="bc-button bc-share-button" onclick="bcShareCard()">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
      Share
    </button>
    <button class="bc-button bc-save-button" onclick="bcSaveContact()">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      Save Contact
    </button>
  </div>
`;

export const generateScriptHTML = (data: BusinessCardData) => `
  <script>
    (function() {
      function bcShareCard() {
        if (navigator.share) {
          navigator.share({
            title: '${data.name} - Digital Business Card',
            text: 'Check out my digital business card!',
            url: window.location.href
          }).catch(console.error);
        } else {
          navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Link copied to clipboard!'))
            .catch(console.error);
        }
      }

      function bcSaveContact() {
        const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.jobTitle ? `TITLE:${data.jobTitle}\n` : ''}
${data.company ? `ORG:${data.company}\n` : ''}
${data.email ? `EMAIL:${data.email}\n` : ''}
${data.phone ? `TEL:${data.phone}\n` : ''}
${data.website ? `URL:${data.website}\n` : ''}
END:VCARD\`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '${data.name.replace(/\s+/g, '_')}_contact.vcf';
        a.click();
        window.URL.revokeObjectURL(url);
      }

      window.bcShareCard = bcShareCard;
      window.bcSaveContact = bcSaveContact;

      document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.bc-card-container');
        if (container) {
          container.classList.remove('bc-loading');
          container.classList.add('bc-loaded');
        }
      });

      const preloadImages = () => {
        const images = [
          ${data.logo ? `'${data.logo}',` : ''}
          ${data.photo ? `'${data.photo}'` : ''}
        ].filter(Boolean);
        
        images.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      };

      preloadImages();
    })();
  </script>
`;