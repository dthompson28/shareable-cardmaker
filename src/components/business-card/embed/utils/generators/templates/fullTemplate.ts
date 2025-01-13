import { BusinessCardData } from "@/types/businessCard";
import { sortGroups, sortAdditionalLinks } from "../../../utils/groupSorting";

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
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--body-font);
      line-height: 1.5;
      background-color: transparent !important;
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
      background-color: white;
      background-image: url('${data.photo}');
    }

    .header-content {
      position: relative;
      height: 100%;
      padding: 24px;
    }

    .header-logo {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 64px;
      height: 64px;
      object-fit: contain;
      background-image: url('${data.logo}');
    }

    .header-text {
      position: absolute;
      bottom: 24px;
      left: 24px;
      color: white;
    }

    .header-text h1 {
      font-size: 28px;
      margin-bottom: 4px;
      font-weight: 700;
      font-family: var(--heading-font);
    }

    .header-text p {
      font-size: 18px;
      margin: 2px 0;
      opacity: 0.9;
      font-family: var(--heading-font);
    }

    .content {
      padding: 24px;
      background-color: #cecabe;
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
      color: #00674f;
      text-decoration: none;
      font-size: 16px;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .contact-link:hover {
      background-color: #00674f1a;
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
      color: #00674f;
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
      color: #326872;
      margin-bottom: 12px;
    }

    .additional-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #0D1B2A;
      text-decoration: none;
      font-size: 16px;
      margin-bottom: 12px;
      padding: 8px;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .additional-link:hover {
      background-color: #0D1B2A1a;
    }

    .additional-link svg {
      width: 20px;
      height: 20px;
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
      background-color: #00674f;
    }

    .share-button svg {
      color: white;
      background: none;
    }

    .save-button {
      background-color: transparent;
      color: #be5103;
      border: 2px solid #be5103;
    }

    .save-button svg {
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            ${data.email}
          </a>
          ` : ''}
        </div>

        ${Object.values(data.social).some(value => value && typeof value === 'string') ? `
        <div class="social-links">
          ${data.social.linkedin ? `
          <a href="${data.social.linkedin}" target="_blank" class="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            Share
          </button>

          <button onclick="saveContact()" class="action-button save-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
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
      if (navigator.share) {
        navigator.share({
          title: '${data.name} - Digital Business Card',
          text: 'Check out my digital business card!',
          url: window.location.href
        }).catch(console.error);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
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
${data.website ? `URL;TYPE=work:${data.website}` : ''}
${data.photo ? `PHOTO;VALUE=URL:${data.photo}` : ''}
${data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}` : ''}
END:VCARD\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '${data.name.replace(/\s+/g, '_')}_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>`;
};