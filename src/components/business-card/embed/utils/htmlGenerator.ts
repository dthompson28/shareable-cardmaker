import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateHeaderHTML = (data: BusinessCardData) => `
  <div class="bc-header" style="position: relative;">
    ${data.photoStyle === 'compact' ? `
      <div 
        class="bc-photo-header"
        style="
          width: 100%;
          height: 12rem;
          background-color: ${data.colors.secondary};
          position: relative;
        "
      >
        ${data.logo ? `
          <div 
            class="bc-logo"
            style="
              position: absolute;
              width: 4rem;
              height: 4rem;
              background-image: url('${data.logo}');
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              ${getLogoPositionStyle(data.logoPosition)}
              z-index: 10;
            "
          ></div>
        ` : ''}
      </div>
      <div class="bc-profile" style="padding: 0 1.5rem; margin-top: -6rem;">
        <div 
          class="bc-profile-image"
          style="
            width: 12rem;
            height: 12rem;
            border-radius: 50%;
            margin: 0 auto 1rem;
            background-image: url('${data.photo}');
            background-size: cover;
            background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
            border: 4px solid white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          "
        ></div>
        <div class="bc-text-content" style="text-align: center;">
          <h1 class="bc-name" style="
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: ${data.colors.primary};
            margin: 0 0 0.5rem;
          ">${data.name}</h1>
          ${data.jobTitle ? `
            <h2 class="bc-job-title" style="
              font-family: 'Playfair Display', serif;
              font-size: 1.25rem;
              color: ${data.colors.secondary};
              margin: 0 0 0.25rem;
            ">${data.jobTitle}</h2>
          ` : ''}
          ${data.company ? `
            <h2 class="bc-company" style="
              font-family: 'Playfair Display', serif;
              font-size: 1.125rem;
              color: ${data.colors.accent};
              margin: 0;
            ">${data.company}</h2>
          ` : ''}
        </div>
      </div>
    ` : `
      <div class="bc-full-photo" style="
        position: relative;
        width: 100%;
        height: 16rem;
        background-image: url('${data.photo}');
        background-size: cover;
        background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
      ">
        <div style="
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
        "></div>
        ${data.logo ? `
          <div 
            class="bc-logo"
            style="
              position: absolute;
              width: 4rem;
              height: 4rem;
              background-image: url('${data.logo}');
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              ${getLogoPositionStyle(data.logoPosition)}
              z-index: 10;
            "
          ></div>
        ` : ''}
        <div class="bc-text-content" style="
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          z-index: 1;
        ">
          <h1 class="bc-name" style="
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: white;
            margin: 0 0 0.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          ">${data.name}</h1>
          ${data.jobTitle ? `
            <h2 class="bc-job-title" style="
              font-family: 'Playfair Display', serif;
              font-size: 1.25rem;
              color: rgba(255,255,255,0.9);
              margin: 0 0 0.25rem;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            ">${data.jobTitle}</h2>
          ` : ''}
          ${data.company ? `
            <h2 class="bc-company" style="
              font-family: 'Playfair Display', serif;
              font-size: 1.125rem;
              color: rgba(255,255,255,0.9);
              margin: 0;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            ">${data.company}</h2>
          ` : ''}
        </div>
      </div>
    `}
  </div>
`;

export const generateContactHTML = (data: BusinessCardData) => `
  <div class="bc-contact-section" style="padding: 1.5rem;">
    ${data.phone ? `
      <a href="tel:${data.phone}" class="bc-contact-item" style="
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: ${data.colors.primary};
        text-decoration: none;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-family: 'Open Sans', sans-serif;
        transition: all 0.2s ease;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        ${data.phone}
      </a>
    ` : ''}
    ${data.email ? `
      <a href="mailto:${data.email}" class="bc-contact-item" style="
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: ${data.colors.primary};
        text-decoration: none;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-family: 'Open Sans', sans-serif;
        transition: all 0.2s ease;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        ${data.email}
      </a>
    ` : ''}
    ${data.website ? `
      <a href="${data.website}" target="_blank" rel="noopener noreferrer" class="bc-contact-item" style="
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: ${data.colors.primary};
        text-decoration: none;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-family: 'Open Sans', sans-serif;
        transition: all 0.2s ease;
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        ${data.website}
      </a>
    ` : ''}
  </div>
`;

export const generateSocialHTML = (data: BusinessCardData) => `
  <div class="bc-social-section" style="padding: 0 1.5rem;">
    <div class="bc-social-links" style="
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin: 1.5rem 0;
      flex-wrap: wrap;
    ">
      ${Object.entries(data.social)
        .filter(([key, value]) => key !== 'additionalLinks' && value)
        .map(([platform, url]) => `
          <a 
            href="${url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="bc-social-link"
            style="
              color: ${data.colors.primary};
              transition: all 0.2s ease;
            "
          >
            ${getSocialIcon(platform)}
          </a>
        `).join('')}
    </div>
    ${data.social.additionalLinks?.length ? `
      <div class="bc-additional-links" style="margin-top: 1.5rem;">
        ${data.social.additionalLinks.map(link => `
          <a 
            href="${link.url}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bc-contact-item"
            style="
              display: flex;
              align-items: center;
              gap: 0.75rem;
              color: ${data.colors.secondary};
              text-decoration: none;
              padding: 0.5rem;
              margin-bottom: 0.5rem;
              font-family: 'Open Sans', sans-serif;
              transition: all 0.2s ease;
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            ${link.title}
          </a>
        `).join('')}
      </div>
    ` : ''}
  </div>
`;

export const generateActionButtonsHTML = () => `
  <div class="bc-action-buttons" style="
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
  ">
    <button 
      onclick="bcShareCard()"
      class="bc-button bc-share-button"
      style="
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        border: none;
        font-family: 'Open Sans', sans-serif;
        background-color: var(--bc-primary-color);
        color: white;
        transition: opacity 0.2s;
      "
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
      Share
    </button>
    <button 
      onclick="bcSaveContact()"
      class="bc-button bc-save-button"
      style="
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
        background-color: transparent;
        color: var(--bc-accent-color);
        border: 2px solid var(--bc-accent-color);
        transition: all 0.2s;
      "
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Save Contact
    </button>
  </div>
`;

export const generateScriptHTML = (data: BusinessCardData) => `
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
`;

// Helper function to get logo position style
const getLogoPositionStyle = (position: { x: number; y: number }) => {
  return `
    top: ${position.y}%;
    left: ${position.x}%;
    transform: translate(-50%, -50%);
  `;
};

// Helper function to get social media icons
const getSocialIcon = (platform: string) => {
  const icons: Record<string, string> = {
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
    twitter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>`,
    youtube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>`,
    tiktok: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>`,
    whatsapp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`
  };
  return icons[platform] || '';
};