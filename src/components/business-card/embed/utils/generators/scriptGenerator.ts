import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateVCard } from "./vCardGenerator";

export const generateScriptContent = (data: BusinessCardData) => `
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
      });
    } else {
      alert('Sharing is not supported on this device.');
    }
  }
`;