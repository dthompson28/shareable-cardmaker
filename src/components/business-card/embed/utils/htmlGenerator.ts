import { BusinessCardData } from "@/components/BusinessCardForm";

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
