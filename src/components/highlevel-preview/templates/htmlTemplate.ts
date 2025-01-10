import { headerTemplate } from './headerTemplate';
import { contactTemplate } from './contactTemplate';
import { socialTemplate } from './socialTemplate';
import { actionsTemplate } from './actionsTemplate';

export const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <title>Dani Thompson - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for Dani Thompson">
  <meta name="author" content="Dani Thompson">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="business-card-wrapper">
    <div class="business-card">
      ${headerTemplate}
      <div class="content">
        ${contactTemplate}
        ${socialTemplate}
        <div class="additional-links">
          <a href="https://danithompsonltd.com/schedule-a-call-danithompson" target="_blank" rel="noopener noreferrer" class="additional-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>Schedule a Call</span>
          </a>
        </div>
        ${actionsTemplate}
      </div>
    </div>
  </div>

  <script>
    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:Dani Thompson
TITLE:Marketing Strategist
ORG:Thompson Marketing Solutions
EMAIL;TYPE=WORK:dani@danithompsonltd.com
TEL;TYPE=WORK,VOICE:+14405038011
URL:https://danithompsonltd.com/schedule-a-call-danithompson
X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/danielle-thompson-cleveland/
X-SOCIALPROFILE;TYPE=facebook:https://www.facebook.com/danithomp2014
X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/danithompsoncle/
END:VCARD\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Dani_Thompson_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

    function shareCard() {
      if (navigator.share) {
        navigator.share({
          title: 'Dani Thompson - Digital Business Card',
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
  </script>
</body>
</html>`;