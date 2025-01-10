import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateVCardScript = (data: BusinessCardData) => `
  function saveContact() {
    const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:${data.name}
TITLE:${data.jobTitle}
ORG:${data.company}
EMAIL;TYPE=WORK:${data.email}
TEL;TYPE=WORK,VOICE:${data.phone}
URL:${data.website}
${data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}` : ''}
${data.social.facebook ? `X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}` : ''}
${data.social.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}` : ''}
${data.social.twitter ? `X-SOCIALPROFILE;TYPE=twitter:${data.social.twitter}` : ''}
${data.social.youtube ? `X-SOCIALPROFILE;TYPE=youtube:${data.social.youtube}` : ''}
${data.social.tiktok ? `X-SOCIALPROFILE;TYPE=tiktok:${data.social.tiktok}` : ''}
END:VCARD\`;
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
`;