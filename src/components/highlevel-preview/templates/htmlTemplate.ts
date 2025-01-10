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
    <div class="business-card">
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
          <a href="tel:440-503-8011" class="contact-link">
            <i class="fas fa-phone"></i>
            <span>440-503-8011</span>
          </a>
          <a href="mailto:dani@danithompsonltd.com" class="contact-link">
            <i class="fas fa-envelope"></i>
            <span>dani@danithompsonltd.com</span>
          </a>
          <a href="https://danithompsonltd.com/schedule-a-call-danithompson" target="_blank" class="contact-link">
            <i class="fas fa-link"></i>
            <span>danithompsonltd.com</span>
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