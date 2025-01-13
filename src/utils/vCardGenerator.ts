import { BusinessCardData } from "@/types/businessCard";

const getBase64FromUrl = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove the data URL prefix to get just the base64 string
        const base64 = base64String.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting image to base64:', error);
    return '';
  }
};

export const generateVCard = async (data: BusinessCardData): Promise<string> => {
  let photoString = '';
  
  if (data.photo) {
    try {
      const base64Photo = await getBase64FromUrl(data.photo);
      if (base64Photo) {
        photoString = `PHOTO;ENCODING=b;TYPE=JPEG:${base64Photo}\n`;
      }
    } catch (error) {
      console.error('Error processing photo for vCard:', error);
    }
  }

  const vCardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${data.name}`,
    `N:${data.name};;;`,
    data.company ? `ORG:${data.company}` : '',
    data.jobTitle ? `TITLE:${data.jobTitle}` : '',
    data.phone ? `TEL;TYPE=work,voice:${data.phone}` : '',
    data.email ? `EMAIL;TYPE=work:${data.email}` : '',
    data.website ? `URL;TYPE=work:${data.website}` : '',
    photoString,
    data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}` : '',
    data.social.facebook ? `X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}` : '',
    data.social.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}` : '',
    data.social.twitter ? `X-SOCIALPROFILE;TYPE=twitter:${data.social.twitter}` : '',
    data.social.youtube ? `X-SOCIALPROFILE;TYPE=youtube:${data.social.youtube}` : '',
    data.social.tiktok ? `X-SOCIALPROFILE;TYPE=tiktok:${data.social.tiktok}` : '',
    'END:VCARD'
  ].filter(Boolean).join('\n');

  return vCardLines;
};

export const downloadVCard = async (data: BusinessCardData) => {
  const vCardContent = await generateVCard(data);
  const blob = new Blob([vCardContent], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${data.name.replace(/\s+/g, '_')}_contact.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
