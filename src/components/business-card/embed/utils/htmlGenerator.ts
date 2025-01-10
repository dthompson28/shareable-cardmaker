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

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="contact-info">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="contact-item">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${data.phone}
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="contact-item">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <path d="m22 6-10 7L2 6"/>
        </svg>
        ${data.email}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" rel="noopener" class="contact-item">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        Schedule a Call
      </a>
    ` : ''}
  </div>
`;

export const generateSocialHTML = (data: BusinessCardData) => `
  <div class="social-links">
    ${data.social.linkedin ? `
      <a href="${data.social.linkedin}" target="_blank" rel="noopener" class="social-link">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
    ` : ''}
    ${data.social.facebook ? `
      <a href="${data.social.facebook}" target="_blank" rel="noopener" class="social-link">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
    ` : ''}
    ${data.social.instagram ? `
      <a href="${data.social.instagram}" target="_blank" rel="noopener" class="social-link">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </a>
    ` : ''}
  </div>
`;

export const generateActionButtonsHTML = () => `
  <div class="buttons">
    <button onclick="shareContact()" class="button share-button">
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
      </svg>
      <span>Share</span>
    </button>
    <button onclick="downloadContact()" class="button save-button">
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" x2="12" y1="15" y2="3"/>
      </svg>
      <span>Save Contact</span>
    </button>
  </div>
`;

export const generateScriptHTML = (data: BusinessCardData) => `
  <script>
    const downloadContact = () => {
      const vCard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.jobTitle ? `TITLE:${data.jobTitle}` : ''}
${data.company ? `ORG:${data.company}` : ''}
${data.phone ? `TEL:${data.phone}` : ''}
${data.email ? `EMAIL:${data.email}` : ''}
${data.website ? `URL:${data.website}` : ''}
${data.photo ? `PHOTO;VALUE=URL:${data.photo}` : ''}
${data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}` : ''}
${data.social.facebook ? `X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}` : ''}
${data.social.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}` : ''}
END:VCARD\`;
      
      const blob = new Blob([vCard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '${data.name.replace(/\s+/g, '_')}.vcf');
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