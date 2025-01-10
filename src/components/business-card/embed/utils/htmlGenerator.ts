import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderHTML = (data: BusinessCardData) => `
  <div class="header">
    ${data.logo ? `
      <img 
        src="${data.logo}" 
        alt="Logo" 
        class="logo"
        loading="eager"
        decoding="async"
      />
    ` : ''}
  </div>
  <div class="profile">
    ${data.photo ? `
      <img 
        src="${data.photo}" 
        alt="${data.name}" 
        class="profile-image"
        loading="eager"
        decoding="async"
      />
    ` : ''}
    <h1 class="name">${data.name}</h1>
    ${data.company ? `<h2 class="company">${data.company}</h2>` : ''}
  </div>
`;

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="contact-item">
        <i data-lucide="phone"></i>
        ${data.phone}
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="contact-item">
        <i data-lucide="mail"></i>
        ${data.email}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" rel="noopener" class="contact-item">
        <i data-lucide="link"></i>
        ${data.website}
      </a>
    ` : ''}
  </div>
`;

export const generateSocialHTML = (data: BusinessCardData) => `
  <div class="social-links">
    ${data.social.facebook ? `
      <a href="${data.social.facebook}" target="_blank" rel="noopener" class="social-link">
        <i data-lucide="facebook"></i>
      </a>
    ` : ''}
    ${data.social.instagram ? `
      <a href="${data.social.instagram}" target="_blank" rel="noopener" class="social-link">
        <i data-lucide="instagram"></i>
      </a>
    ` : ''}
    ${data.social.linkedin ? `
      <a href="${data.social.linkedin}" target="_blank" rel="noopener" class="social-link">
        <i data-lucide="linkedin"></i>
      </a>
    ` : ''}
  </div>
`;

export const generateActionButtonsHTML = () => `
  <div class="buttons">
    <button onclick="shareContact()" class="button share-button">
      <i data-lucide="share-2"></i>
      Share
    </button>
    <button onclick="downloadContact()" class="button save-button">
      <i data-lucide="download"></i>
      Save Contact
    </button>
  </div>
`;

export const generateScriptHTML = (data: BusinessCardData) => `
  <script>
    const downloadContact = () => {
      const vCard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.phone ? `TEL:${data.phone}` : ''}
${data.email ? `EMAIL:${data.email}` : ''}
${data.website ? `URL:${data.website}` : ''}
${data.photo ? `PHOTO;VALUE=URL:${data.photo}` : ''}
END:VCARD\`;
      
      const blob = new Blob([vCard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '${data.name}.vcf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const shareContact = () => {
      const shareData = {
        title: '${data.name}',
        text: 'Contact information for ${data.name}',
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(console.error);
      } else {
        navigator.clipboard.writeText(window.location.href)
          .then(() => alert('Link copied to clipboard!'))
          .catch(console.error);
      }
    };

    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.card-container');
      if (container) {
        container.classList.remove('loading');
        container.classList.add('loaded');
      }
    });

    ${data.photo || data.logo ? `
    const preloadImages = () => {
      const images = [
        ${data.logo ? `'${data.logo}',` : ''}
        ${data.photo ? `'${data.photo}'` : ''}
      ];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
    ` : ''}
  </script>
`;