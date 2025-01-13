import { BusinessCardData } from "@/types/businessCard";

import { generateHeaderSection } from "./sections/headerSection";
import { generateContactSection } from "./sections/contactSection";
import { generateSocialSection } from "./sections/socialSection";
import { generateActionButtonsSection } from "./sections/actionButtonsSection";
import { generateVCard } from "./vCardGenerator";

export {
  generateHeaderSection,
  generateContactSection,
  generateSocialSection,
  generateActionButtonsSection,
};

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <title>${data.name} - Digital Business Card</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="business-card-wrapper">
    <div class="business-card">
      ${generateHeaderSection(data)}
      <div class="content">
        ${generateContactSection(data)}
        ${generateSocialSection(data)}
        ${generateActionButtonsSection(data)}
      </div>
    </div>
  </div>
  <script>
    function saveContact() {
      const vcard = \`${generateVCard(data)}\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '${data.name.replace(/\s+/g, '_')}_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

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

    // HighLevel compatibility
    window.addEventListener('load', function() {
      if (window.parent) {
        window.parent.postMessage('embed_ready', '*');
      }
    });
  </script>
</body>
</html>`;
