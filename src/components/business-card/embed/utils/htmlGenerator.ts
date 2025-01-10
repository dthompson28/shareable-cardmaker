import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateStyles } from "./styleGenerator";

export const generateEmbedHtml = (data: BusinessCardData) => {
  const styles = generateStyles(data);
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.name}'s Business Card</title>
  <style>${styles}</style>
</head>
<body>
  <div class="card-container">
    ${data.logo ? '<div class="logo"></div>' : ''}
    ${data.photo ? '<div class="photo"></div>' : ''}
    <div class="content">
      <div class="header">
        <h1>${data.name}</h1>
        ${data.jobTitle ? `<h2>${data.jobTitle}</h2>` : ''}
        ${data.company ? `<h3>${data.company}</h3>` : ''}
      </div>
      
      <div class="contact-info">
        ${data.phone ? `<p><a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
        ${data.email ? `<p><a href="mailto:${data.email}">${data.email}</a></p>` : ''}
        ${data.website ? `<p><a href="${data.website}" target="_blank">${data.website}</a></p>` : ''}
        ${data.address ? `<p>${data.address}</p>` : ''}
      </div>

      <div class="social-links">
        ${Object.entries(data.social)
          .filter(([key, value]) => key !== 'additionalLinks' && value)
          .map(([key, value]) => `
            <a href="${value}" target="_blank" rel="noopener noreferrer" class="social-icon ${key}"></a>
          `).join('')}
      </div>

      <div class="action-buttons">
        <button onclick="shareCard()" class="share-button">Share</button>
        <button onclick="saveContact()" class="save-contact-button">Save Contact</button>
      </div>
    </div>
  </div>

  <script>
    async function shareCard() {
      const shareData = {
        title: '${data.name}\'s Business Card',
        text: 'Check out my business card!',
        url: window.location.href
      };

      try {
        if (navigator.share && navigator.canShare(shareData)) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }

    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.company ? `ORG:${data.company}` : ''}
${data.jobTitle ? `TITLE:${data.jobTitle}` : ''}
${data.phone ? `TEL;TYPE=work,voice:${data.phone}` : ''}
${data.email ? `EMAIL;TYPE=work:${data.email}` : ''}
${data.website ? `URL;TYPE=work:${data.website}` : ''}
${data.address ? `ADR;TYPE=work:;;${data.address}` : ''}
END:VCARD\`;

      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '${data.name.replace(/\s+/g, '_')}_contact.vcf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>`;
};