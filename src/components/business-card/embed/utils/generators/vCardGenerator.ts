import { BusinessCardData } from "@/components/BusinessCardForm";

export const generateVCard = (data: BusinessCardData) => {
  return `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
${data.jobTitle ? `TITLE:${data.jobTitle}\n` : ''}
${data.company ? `ORG:${data.company}\n` : ''}
${data.email ? `EMAIL;TYPE=WORK:${data.email}\n` : ''}
${data.phone ? `TEL;TYPE=WORK,VOICE:${data.phone}\n` : ''}
${data.website ? `URL:${data.website}\n` : ''}
${data.address ? `ADR;TYPE=WORK:;;${data.address}\n` : ''}
${data.social.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin}\n` : ''}
${data.social.facebook ? `X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook}\n` : ''}
${data.social.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram}\n` : ''}
${data.social.twitter ? `X-SOCIALPROFILE;TYPE=twitter:${data.social.twitter}\n` : ''}
${data.social.youtube ? `X-SOCIALPROFILE;TYPE=youtube:${data.social.youtube}\n` : ''}
${data.social.tiktok ? `X-SOCIALPROFILE;TYPE=tiktok:${data.social.tiktok}\n` : ''}
${data.social.whatsapp ? `X-SOCIALPROFILE;TYPE=whatsapp:${data.social.whatsapp}\n` : ''}
END:VCARD`;
};