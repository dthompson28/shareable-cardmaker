import { BusinessCardData } from "@/components/BusinessCardForm";

const getSocialIcon = (platform: string) => {
  const icons = {
    linkedin: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>`,
    facebook: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>`,
    instagram: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>`,
    youtube: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>`,
    twitter: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>`,
    whatsapp: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>`,
    tiktok: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>`,
  };
  
  return icons[platform as keyof typeof icons] || '';
};

export const generateHeaderHTML = (data: BusinessCardData) => {
  return `
  <div class="bc-header" style="position: relative;">
    ${data.photoStyle === 'full' ? `
      <div class="bc-full-photo" style="
        position: relative;
        width: 100%;
        height: 16rem;
        background-image: url('${data.photo}');
        background-size: cover;
        background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
      ">
        <div class="bc-photo-overlay"></div>
        ${data.logo ? `
          <div 
            class="bc-logo"
            style="
              background-image: url('${data.logo}');
              top: ${data.logoPosition.y}%;
              left: ${data.logoPosition.x}%;
              transform: translate(-50%, -50%);
            "
          ></div>
        ` : ''}
        <div class="bc-text-content">
          <h1 class="bc-name font-playfair">${data.name}</h1>
          ${data.jobTitle ? `<h2 class="bc-job-title font-playfair">${data.jobTitle}</h2>` : ''}
          ${data.company ? `<h2 class="bc-company font-playfair">${data.company}</h2>` : ''}
        </div>
      </div>
    ` : `
      <div class="bc-profile">
        ${data.photo ? `<img src="${data.photo}" alt="${data.name}" class="bc-profile-image" />` : ''}
        ${data.logo ? `
          <div 
            class="bc-logo"
            style="
              background-image: url('${data.logo}');
              top: ${data.logoPosition.y}%;
              left: ${data.logoPosition.x}%;
              transform: translate(-50%, -50%);
            "
          ></div>
        ` : ''}
        <h1 class="bc-name font-playfair">${data.name}</h1>
        ${data.jobTitle ? `<h2 class="bc-job-title font-playfair">${data.jobTitle}</h2>` : ''}
        ${data.company ? `<h2 class="bc-company font-playfair">${data.company}</h2>` : ''}
      </div>
    `}
  </div>`;
};

export const generateContactHTML = (data: BusinessCardData) => {
  return `
  <div class="bc-contact-section font-opensans">
    ${data.phone ? `<a href="tel:${data.phone}" class="bc-contact-item">${data.phone}</a>` : ''}
    ${data.email ? `<a href="mailto:${data.email}" class="bc-contact-item">${data.email}</a>` : ''}
    ${data.website ? `<a href="${data.website}" target="_blank" rel="noopener noreferrer" class="bc-contact-item">${data.website}</a>` : ''}
  </div>`;
};

export const generateSocialHTML = (data: BusinessCardData) => {
  const socialLinks = Object.entries(data.social)
    .filter(([key, value]) => key !== 'additionalLinks' && value)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="bc-social-link" style="color: ${data.colors.primary}">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  const additionalLinks = data.social.additionalLinks?.map(link => `
    <a 
      href="${link.url}" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="flex items-center gap-2 no-underline font-opensans py-2 px-4 rounded-lg transition-all duration-200"
      style="
        background-color: ${data.colors.background};
        color: ${data.colors.primary};
        border: 1px solid ${data.colors.primary};
      "
    >
      <svg 
        class="w-5 h-5" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <span>${link.title}</span>
    </a>
  `).join('') || '';

  return `
  <div class="bc-social-section">
    <div class="bc-social-links" style="color: ${data.colors.primary}">
      ${socialLinks}
    </div>
    ${additionalLinks ? `
      <div class="bc-additional-links space-y-2 mt-4 font-opensans">
        ${additionalLinks}
      </div>
    ` : ''}
  </div>`;
};

export const generateActionButtonsHTML = () => {
  return `
  <div class="bc-action-buttons">
    <button onclick="bcShareCard()" class="bc-button bc-share-button font-opensans">Share</button>
    <button onclick="bcSaveContact()" class="bc-button bc-save-button font-opensans">Save Contact</button>
  </div>`;
};

export const generateScriptHTML = (data: BusinessCardData) => {
  return `
  <script>
    (function() {
      window.bcShareCard = function() {
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
      };

      window.bcSaveContact = function() {
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
      };
    })();
  </script>`;
};

export const generateEmbedCode = (data: BusinessCardData) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --card-primary: ${data.colors.primary};
      --card-secondary: ${data.colors.secondary};
      --card-accent: ${data.colors.accent};
      --card-background: ${data.colors.background};
    }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--card-background);
      color: var(--card-primary);
      font-family: 'Open Sans', sans-serif;
    }

    .font-playfair {
      font-family: 'Playfair Display', serif;
    }

    .font-opensans {
      font-family: 'Open Sans', sans-serif;
    }

    .bc-name {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--card-primary);
      margin-bottom: 0.5rem;
    }

    .bc-job-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--card-secondary);
      margin-bottom: 0.25rem;
    }

    .bc-company {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--card-accent);
      margin: 0;
    }

    .bc-additional-links a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: all 0.2s;
      background-color: var(--card-background);
      color: var(--card-primary);
      border: 1px solid var(--card-primary);
    }

    .bc-additional-links a:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  ${generateHeaderHTML(data)}
  ${generateContactHTML(data)}
  ${generateSocialHTML(data)}
  ${generateActionButtonsHTML()}
  ${generateScriptHTML(data)}
</body>
</html>`;
};
