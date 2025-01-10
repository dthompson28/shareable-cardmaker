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
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="bc-social-link">
        ${getSocialIcon(platform)}
      </a>
    `).join('');

  const additionalLinks = data.social.additionalLinks?.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="bc-contact-item font-opensans">
      ${link.title}
    </a>
  `).join('') || '';

  return `
  <div class="bc-social-section">
    <div class="bc-social-links">
      ${socialLinks}
    </div>
    ${additionalLinks ? `
      <div class="bc-additional-links font-opensans">
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

// Helper function to get social media icons
const getSocialIcon = (platform: string) => {
  const icons = {
    linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>`,
    facebook: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>`,
    instagram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>`,
  };
  return icons[platform as keyof typeof icons] || '';
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
      --font-playfair: 'Playfair Display', serif;
      --font-opensans: 'Open Sans', sans-serif;
    }

    .font-playfair {
      font-family: var(--font-playfair);
    }

    .font-opensans {
      font-family: var(--font-opensans);
    }

    .bc-name {
      font-size: 2rem;
      font-weight: 700;
      color: ${data.colors.primary};
      margin: 0 0 0.5rem;
    }

    .bc-job-title {
      font-size: 1.25rem;
      font-weight: 500;
      color: ${data.colors.secondary};
      margin: 0 0 0.25rem;
    }

    .bc-company {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${data.colors.accent};
      margin: 0;
    }

    .bc-contact-item {
      font-size: 1rem;
      font-weight: 400;
    }

    .bc-button {
      font-size: 1rem;
      font-weight: 500;
    }

    .bc-card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
      background-color: transparent;
    }

    .bc-business-card {
      position: relative;
      width: 100%;
      max-width: 28rem;
      margin: 0 auto;
      font-family: 'Open Sans', sans-serif;
      background-color: ${data.colors.background};
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .bc-full-photo {
      position: relative;
      width: 100%;
      height: 16rem;
      background-size: cover;
      background-position: center;
    }

    .bc-photo-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
    }

    .bc-logo {
      position: absolute;
      width: 4rem;
      height: 4rem;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 10;
    }

    .bc-text-content {
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
      z-index: 1;
    }

    @media (max-width: 640px) {
      .bc-card-container {
        padding: 1rem;
      }

      .bc-business-card {
        max-width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="bc-card-container">
    <div class="bc-business-card">
      <div class="bc-header" style="position: relative;">
        <div class="bc-full-photo" style="
          background-image: url('${data.photo}');
        ">
          <div class="bc-photo-overlay"></div>
          <div 
            class="bc-logo"
            style="
              background-image: url('${data.logo}');
              top: ${data.logoPosition.y}%;
              left: ${data.logoPosition.x}%;
              transform: translate(-50%, -50%);
            "
          ></div>
          <div class="bc-text-content">
            <h1 class="bc-name">${data.name}</h1>
            ${data.jobTitle ? `<h2 class="bc-job-title">${data.jobTitle}</h2>` : ''}
            ${data.company ? `<h2 class="bc-company">${data.company}</h2>` : ''}
          </div>
        </div>
      </div>
      <div class="bc-contact-section">
        ${data.phone ? `<a href="tel:${data.phone}" class="bc-contact-item">${data.phone}</a>` : ''}
        ${data.email ? `<a href="mailto:${data.email}" class="bc-contact-item">${data.email}</a>` : ''}
        ${data.website ? `<a href="${data.website}" target="_blank" rel="noopener noreferrer" class="bc-contact-item">${data.website}</a>` : ''}
      </div>
      <div class="bc-social-section">
        <div class="bc-social-links">
          ${Object.entries(data.social)
            .filter(([key, value]) => key !== 'additionalLinks' && value)
            .map(([platform, url]) => `
              <a href="${url}" target="_blank" rel="noopener noreferrer" class="bc-social-link">${getSocialIcon(platform)}</a>
            `).join('')}
        </div>
        ${data.social.additionalLinks?.length ? `
          <div class="bc-additional-links">
            ${data.social.additionalLinks.map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="bc-contact-item">${link.title}</a>
            `).join('')}
          </div>
        ` : ''}
      </div>
      <div class="bc-action-buttons">
        <button onclick="bcShareCard()" class="bc-button bc-share-button">Share</button>
        <button onclick="bcSaveContact()" class="bc-button bc-save-button">Save Contact</button>
      </div>
    </div>
  </div>
  
  <script>
    (function() {
      // Set CSS variables for colors
      document.documentElement.style.setProperty('--bc-primary-color', '${data.colors.primary}');
      document.documentElement.style.setProperty('--bc-secondary-color', '${data.colors.secondary}');
      document.documentElement.style.setProperty('--bc-accent-color', '${data.colors.accent}');
      document.documentElement.style.setProperty('--bc-background-color', '${data.colors.background}');

      // Share functionality
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

      // Save contact functionality
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

      // Add hover effects
      document.querySelectorAll('.bc-contact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = '${data.colors.background}';
          item.style.color = '${data.colors.secondary}';
        });
        item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = 'transparent';
          item.style.color = '${data.colors.primary}';
        });
      });

      document.querySelectorAll('.bc-social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
          link.style.color = '${data.colors.secondary}';
          link.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', () => {
          link.style.color = '${data.colors.primary}';
          link.style.transform = 'translateY(0)';
        });
      });

      // Preload images
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
</body>
</html>`;
};
