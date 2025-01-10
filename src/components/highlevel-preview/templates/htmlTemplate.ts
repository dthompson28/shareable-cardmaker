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
  <title>Digital Business Card</title>
  <meta name="description" content="Digital Business Card">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="business-card-wrapper">
    <div class="business-card">
      ${headerTemplate}
      <div class="content">
        ${contactTemplate}
        ${socialTemplate}
        ${actionsTemplate}
      </div>
    </div>
  </div>

  <script>
    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:\${document.querySelector('h1').textContent}
N:\${document.querySelector('h1').textContent};;;
\${document.querySelector('.job-title') ? \`TITLE:\${document.querySelector('.job-title').textContent}\n\` : ''}
\${document.querySelector('.company') ? \`ORG:\${document.querySelector('.company').textContent}\n\` : ''}
\${document.querySelector('[href^="tel:"]') ? \`TEL;TYPE=work,voice:\${document.querySelector('[href^="tel:"]').getAttribute('href').replace('tel:', '')}\n\` : ''}
\${document.querySelector('[href^="mailto:"]') ? \`EMAIL;TYPE=work:\${document.querySelector('[href^="mailto:"]').getAttribute('href').replace('mailto:', '')}\n\` : ''}
\${document.querySelector('[href^="http"]') ? \`URL;TYPE=work:\${document.querySelector('[href^="http"]').getAttribute('href')}\n\` : ''}
\${document.querySelector('.header img') ? \`PHOTO;VALUE=URL:\${document.querySelector('.header img').getAttribute('src')}\n\` : ''}
\${document.querySelector('[href*="linkedin"]') ? \`X-SOCIALPROFILE;TYPE=linkedin:\${document.querySelector('[href*="linkedin"]').getAttribute('href')}\n\` : ''}
\${document.querySelector('[href*="facebook"]') ? \`X-SOCIALPROFILE;TYPE=facebook:\${document.querySelector('[href*="facebook"]').getAttribute('href')}\n\` : ''}
\${document.querySelector('[href*="instagram"]') ? \`X-SOCIALPROFILE;TYPE=instagram:\${document.querySelector('[href*="instagram"]').getAttribute('href')}\n\` : ''}
\${document.querySelector('[href*="twitter"]') ? \`X-SOCIALPROFILE;TYPE=twitter:\${document.querySelector('[href*="twitter"]').getAttribute('href')}\n\` : ''}
\${document.querySelector('[href*="youtube"]') ? \`X-SOCIALPROFILE;TYPE=youtube:\${document.querySelector('[href*="youtube"]').getAttribute('href')}\n\` : ''}
\${document.querySelector('[href*="tiktok"]') ? \`X-SOCIALPROFILE;TYPE=tiktok:\${document.querySelector('[href*="tiktok"]').getAttribute('href')}\n\` : ''}
END:VCARD\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = document.querySelector('h1').textContent.replace(/\\s+/g, '_') + '_contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

    function shareCard() {
      if (navigator.share) {
        navigator.share({
          title: document.querySelector('h1').textContent + ' - Digital Business Card',
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

    // HighLevel compatibility
    window.addEventListener('load', function() {
      if (window.parent) {
        window.parent.postMessage('embed_ready', '*');
      }
    });
  </script>
</body>
</html>`;