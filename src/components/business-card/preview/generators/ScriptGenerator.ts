import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateScript = (data: BusinessCardData) => `
  function saveContact() {
    const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
TITLE:${data.jobTitle || ''}
ORG:${data.company || ''}
EMAIL;TYPE=WORK:${data.email || ''}
TEL;TYPE=WORK,VOICE:${data.phone || ''}
URL:${data.website || ''}
${Object.entries(data.social)
  .filter(([key, value]) => key !== 'additionalLinks' && value)
  .map(([key, value]) => `X-SOCIALPROFILE;TYPE=${key}:${value}`)
  .join('\n')}
END:VCARD\`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '${data.name.replace(/\\s+/g, '_')}_Contact.vcf';
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
`;