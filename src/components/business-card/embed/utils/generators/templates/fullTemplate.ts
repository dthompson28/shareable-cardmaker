import { sortGroups, sortAdditionalLinks } from "../../../../utils/groupSorting";
import { BusinessCardData } from "@/types/businessCard";

export const generateFullTemplate = (data: BusinessCardData) => {
  const sortedLinks = sortAdditionalLinks(data.social.additionalLinks || []);
  const groupPositions = new Map(
    data.social.linkGroups?.map(group => [group.name, group.position]) || []
  );
  
  const groupNames = Array.from(new Set(
    sortedLinks
      .map(link => link.groupName)
      .filter((name): name is string => !!name)
  ));
  
  const groupOrder = sortGroups(groupNames, groupPositions);
  
  const groupedLinks = groupOrder.reduce((acc, groupName) => {
    acc[groupName] = sortedLinks.filter(link => link.groupName === groupName) || [];
    return acc;
  }, {} as Record<string, typeof data.social.additionalLinks>);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=${data.fonts.heading.replace(' ', '+')}&family=${data.fonts.body.replace(' ', '+')}&display=swap" rel="stylesheet">
  <style>
    :root {
      --heading-font: "${data.fonts.heading}", serif;
      --body-font: "${data.fonts.body}", sans-serif;
      --primary: ${data.colors.primary};
      --secondary: ${data.colors.secondary};
      --accent: ${data.colors.accent};
      --background: ${data.colors.background};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--body-font);
      line-height: 1.5;
      background-color: var(--background) !important;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    .business-card {
      width: 100%;
      max-width: 448px;
      background: transparent;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .header {
      position: relative;
      width: 100%;
      height: 256px;
      background-size: cover;
      background-position: center;
      background-color: var(--secondary);
      background-image: url('${data.photo}');
    }

    .header-content {
      position: relative;
      z-index: 1;
      color: white;
      padding: 16px;
    }

    .header-text {
      text-align: center;
    }

    .header-logo {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 64px;
      height: 64px;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      background-image: url('${data.logo}');
    }

    .content {
      padding: 24px;
      background-color: var(--background);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--primary);
      text-decoration: none;
      font-size: 16px;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .contact-link:hover {
      background-color: ${data.colors.primary}1a;
    }

    .contact-link svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      background: none;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin: 32px 0;
    }

    .social-icon {
      color: var(--primary);
      width: 20px;
      height: 20px;
    }

    .social-icon svg {
      width: 20px;
      height: 20px;
      background: none;
    }

    .additional-links {
      margin: 24px 0;
    }

    .link-group {
      margin-bottom: 24px;
    }

    .group-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--secondary);
      margin-bottom: 12px;
    }

    .additional-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary);
      text-decoration: none;
      font-size: 16px;
      margin-bottom: 12px;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .additional-link:hover {
      background-color: ${data.colors.primary}1a;
    }

    .additional-link svg {
      width: 20px;
      height: 20px;
      background: none;
    }

    .action-buttons {
      display: flex;
      gap: 16px;
      margin-top: 32px;
    }

    .action-button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }

    .share-button {
      color: white;
      border: none;
      background-color: var(--primary);
    }

    .share-button svg {
      color: white;
      background: none;
    }

    .save-button {
      background-color: transparent;
      color: var(--accent);
      border: 2px solid var(--accent);
    }

    .save-button svg {
      color: var(--accent);
      background: none;
    }
  </style>
</head>
<body>
  <div style="width: 448px; margin: auto;">
    <div class="business-card">
      <div class="header">
        <div class="header-content">
          ${data.logo ? `<div class="header-logo"></div>` : ''}
          <div class="header-text">
            <h1>${data.name}</h1>
            ${data.jobTitle ? `<p>${data.jobTitle}</p>` : ''}
            ${data.company ? `<p>${data.company}</p>` : ''}
          </div>
        </div>
      </div>

      <div class="content">
        <div class="contact-info">
          ${data.email ? `
          <a href="mailto:${data.email}" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            ${data.email}
          </a>
          ` : ''}

          ${data.phone ? `
          <a href="tel:${data.phone}" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            ${data.phone}
          </a>
          ` : ''}

          ${data.website ? `
          <a href="${data.website}" target="_blank" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            ${new URL(data.website).hostname}
          </a>
          ` : ''}
        </div>

        ${Object.values(data.social).some(value => value && typeof value === 'string') ? `
        <div class="social-links">
          ${data.social.linkedin ? `
          <a href="${data.social.linkedin}" target="_blank" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          ` : ''}
          ${data.social.facebook ? `
          <a href="${data.social.facebook}" target="_blank" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          ` : ''}
          ${data.social.twitter ? `
          <a href="${data.social.twitter}" target="_blank" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
          ` : ''}
          ${data.social.instagram ? `
          <a href="${data.social.instagram}" target="_blank" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          ` : ''}
        </div>
        ` : ''}

        ${sortedLinks.length > 0 ? `
        <div class="additional-links">
          ${Object.entries(groupedLinks).map(([groupName, links]) => `
          <div class="link-group">
            <h3 class="group-title">${groupName}</h3>
            ${links.map(link => `
            <a href="${link.url}" target="_blank" class="additional-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>${link.title}</span>
            </a>
            `).join('')}
          </div>
          `).join('')}
        </div>
        ` : ''}

        <div class="action-buttons">
          <button onclick="shareCard()" class="action-button share-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            Share
          </button>

          <button onclick="saveContact()" class="action-button save-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17 21 17 13 7 13 7 21"/>
              <polyline points="7 3 7 8 15 8"/>
            </svg>
            Save Contact
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    function shareCard() {
      const shareData = {
        title: '${data.name} - Digital Business Card',
        text: 'Check out my digital business card!',
        url: document.location.href
      };

      if (navigator.share) {
        navigator.share(shareData).catch(console.error);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = document.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Link copied to clipboard!');
      }
    }

    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
N:${data.name};;;
${data.jobTitle ? `TITLE:${data.jobTitle}` : ''}
${data.company ? `ORG:${data.company}` : ''}
${data.email ? `EMAIL;TYPE=work:${data.email}` : ''}
${data.phone ? `TEL;TYPE=work,voice:${data.phone}` : ''}
${data.website ? `URL;TYPE=work:${data.website}` : ''}
${data.photo ? `PHOTO;VALUE=URL:${data.photo}` : ''}
${data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}` : ''}
${data.social.facebook ? `X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}` : ''}
${data.social.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}` : ''}
${data.social.twitter ? `X-SOCIALPROFILE;TYPE=twitter:${data.social.twitter}` : ''}
END:VCARD\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '${data.name.replace(/\\s+/g, '_')}_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>`;
};