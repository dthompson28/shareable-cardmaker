import { BusinessCardData } from "@/types/businessCard";

export const generateVCard = (data: BusinessCardData): string => {
  const vCardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${data.name}`,
    `N:${data.name};;;`,
    data.jobTitle ? `TITLE:${data.jobTitle}` : '',
    data.company ? `ORG:${data.company}` : '',
    data.phone ? `TEL;TYPE=work,voice:${data.phone}` : '',
    data.email ? `EMAIL;TYPE=work:${data.email}` : '',
    data.website ? `URL;TYPE=work:${data.website}` : '',
    data.address ? `ADR;TYPE=work:;;${data.address};;;` : '',
    data.photo ? `PHOTO;VALUE=URL:${data.photo}` : '',
    data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}` : '',
    data.social.facebook ? `X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}` : '',
    data.social.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}` : '',
    data.social.twitter ? `X-SOCIALPROFILE;TYPE=twitter:${data.social.twitter}` : '',
    'END:VCARD'
  ].filter(Boolean).join('\n');

  return vCardLines;
};