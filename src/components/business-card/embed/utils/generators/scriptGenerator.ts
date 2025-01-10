import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateVCard } from "./vCardGenerator";

export const generateScriptContent = (data: BusinessCardData) => {
  return `
    (function() {
      window.bcShareCard = function() {
        if (navigator.share) {
          navigator.share({
            title: '${data.name} - Digital Business Card',
            text: 'Check out my digital business card!',
            url: window.location.href
          }).catch((error) => {
            console.error('Error sharing:', error);
            copyToClipboard();
          });
        } else {
          copyToClipboard();
        }
      };

      function copyToClipboard() {
        navigator.clipboard.writeText(window.location.href)
          .then(() => alert('Link copied to clipboard! You can now share it.'))
          .catch(err => console.error('Failed to copy:', err));
      }

      window.bcSaveContact = function() {
        const vcard = \`${generateVCard(data)}\`;
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '${data.name.replace(/\s+/g, '_')}_contact.vcf';
        a.click();
        window.URL.revokeObjectURL(url);
      };
    })();
  `;
};