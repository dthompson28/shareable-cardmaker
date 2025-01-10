export const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Digital Business Card</title>
  <meta name="description" content="Digital Business Card">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
  <div class="container">
    <div class="business-card business-card-wrapper">
      <div class="header">
        <div class="header-overlay"></div>
        <div class="header-content">
          <img src="https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/674922593447a59599123157.png" alt="Logo" class="header-logo" />
          <div class="header-text">
            <h1>Dani Thompson</h1>
            <p>Marketer</p>
            <p>Thompson Limited</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="contact-info">
          <a href="tel:440-503-8011" class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            440-503-8011
          </a>
          <a href="mailto:dani@danithompsonltd.com" class="contact-item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="m22 6-10 7L2 6"/>
            </svg>
            dani@danithompsonltd.com
          </a>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/danielle-thompson-cleveland/" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/danithomp2014" target="_blank" class="social-link">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/danithompsoncle/" target="_blank" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <a href="https://danithompsonltd.com/schedule-a-call-danithompson" target="_blank" class="additional-link">
          <i class="fas fa-arrow-right"></i>
          <span>Schedule a Call with Me!</span>
        </a>
        <div class="action-buttons">
          <button onclick="shareCard()" class="action-button share-button">
            <i class="fas fa-share-alt"></i>
            Share
          </button>
          <button onclick="saveContact()" class="action-button save-button">
            <i class="fas fa-download"></i>
            Save Contact
          </button>
        </div>
      </div>
    </div>
  </div>
  <script>
    function saveContact() {
      const vcard = \`BEGIN:VCARD
VERSION:3.0
FN:Dani Thompson
TITLE:Marketer
ORG:Thompson Limited
EMAIL;TYPE=WORK:dani@danithompsonltd.com
TEL;TYPE=WORK,VOICE:440-503-8011
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
        });
      } else {
        alert('Sharing is not supported on this device.');
      }
    }
  </script>
</body>
</html>`;