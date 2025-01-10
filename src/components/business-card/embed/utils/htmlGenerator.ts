import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderHTML = (data: BusinessCardData) => {
  return `
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
      ${data.photoStyle === 'full' ? `
        <div class="profile">
          <h1 class="name">${data.name}</h1>
          ${data.jobTitle ? `<h2 class="job-title">${data.jobTitle}</h2>` : ''}
          ${data.company ? `<h2 class="company">${data.company}</h2>` : ''}
        </div>
      ` : ''}
    </div>
    ${data.photoStyle !== 'full' ? `
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
        ${data.jobTitle ? `<h2 class="job-title">${data.jobTitle}</h2>` : ''}
        ${data.company ? `<h2 class="company">${data.company}</h2>` : ''}
      </div>
    ` : ''}
  `;
};

export const generateContactHTML = (data: BusinessCardData) => {
  return `
    <div class="contact-info">
      ${data.email ? `
        <a href="mailto:${data.email}" class="contact-item">
          <i data-lucide="mail" class="w-5 h-5"></i>
          ${data.email}
        </a>
      ` : ''}
      ${data.phone ? `
        <a href="tel:${data.phone}" class="contact-item">
          <i data-lucide="phone" class="w-5 h-5"></i>
          ${data.phone}
        </a>
      ` : ''}
      ${data.website ? `
        <a href="${data.website}" target="_blank" rel="noopener noreferrer" class="contact-item">
          <i data-lucide="globe" class="w-5 h-5"></i>
          ${data.website}
        </a>
      ` : ''}
    </div>
  `;
};

export const generateSocialHTML = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link">
        <i data-lucide="${platform}" class="w-6 h-6"></i>
      </a>
    `).join('');

  const additionalLinks = data.social.additionalLinks?.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="contact-item">
      <i data-lucide="link" class="w-5 h-5"></i>
      ${link.title}
    </a>
  `).join('') || '';

  return `
    <div class="social-links">
      ${socialLinks}
      ${additionalLinks}
    </div>
  `;
};

export const generateActionButtonsHTML = () => {
  return `
    <div class="buttons">
      <button class="button share-button" onclick="shareCard()">
        <i data-lucide="share-2" class="w-5 h-5"></i>
        Share
      </button>
      <button class="button save-button" onclick="saveContact()">
        <i data-lucide="download" class="w-5 h-5"></i>
        Save Contact
      </button>
    </div>
  `;
};

export const generateScriptHTML = (data: BusinessCardData) => {
  return `
    <script>
      function shareCard() {
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

      function saveContact() {
        const vcard = generateVCard();
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '${data.name.replace(/\s+/g, '_')}_contact.vcf';
        a.click();
        window.URL.revokeObjectURL(url);
      }

      function generateVCard() {
        return \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.jobTitle ? `TITLE:${data.jobTitle}\n` : ''}
${data.company ? `ORG:${data.company}\n` : ''}
${data.email ? `EMAIL:${data.email}\n` : ''}
${data.phone ? `TEL:${data.phone}\n` : ''}
${data.website ? `URL:${data.website}\n` : ''}
END:VCARD\`;
      }

      document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.card-container');
        if (container) {
          container.classList.remove('loading');
          container.classList.add('loaded');
        }
      });
    </script>
  `;
};