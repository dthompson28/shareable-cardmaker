import { BusinessCardData } from "@/components/BusinessCardForm";

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
    data.photo ? `PHOTO;VALUE=URL:${data.photo}` : '',
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