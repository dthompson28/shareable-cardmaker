import { BusinessCardData } from "@/components/BusinessCardForm";

interface CardActionsProps {
  data: BusinessCardData;
}

export const CardActions = ({ data }: CardActionsProps) => {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: `${data.name} - Digital Business Card`,
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
  };

  const handleSaveClick = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
N:${data.name};;;
TITLE:${data.jobTitle || ''}
ORG:${data.company || ''}
EMAIL;TYPE=work:${data.email || ''}
URL;TYPE=work:${data.website || ''}
PHOTO;VALUE=URL:${data.photo || ''}
X-SOCIALPROFILE;TYPE=linkedin:${data.social.linkedin || ''}
X-SOCIALPROFILE;TYPE=facebook:${data.social.facebook || ''}
X-SOCIALPROFILE;TYPE=instagram:${data.social.instagram || ''}
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.name.replace(/\s+/g, '_')}_Contact.vcf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="action-buttons">
      <button onClick={handleShareClick} className="action-button share-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16 6 12 2 8 6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
        Share
      </button>

      <button onClick={handleSaveClick} className="action-button save-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
          <polyline points="17 21 17 13 7 13 7 21"/>
          <polyline points="7 3 7 8 15 8"/>
        </svg>
        Save Contact
      </button>
    </div>
  );
};