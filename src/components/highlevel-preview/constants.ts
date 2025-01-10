export const htmlCode = `<!DOCTYPE html>
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

export const cssCode = `
.business-card-wrapper {
  --primary: #00674f;
  --secondary: #326872;
  --accent: #be5103;
  --background: #cecabe;
}

.business-card-wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.business-card-wrapper body {
  background-color: var(--background);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.business-card-wrapper .card-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.business-card-wrapper .business-card {
  background: white;
  max-width: 28rem;
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.business-card-wrapper .header {
  background-color: var(--primary);
  height: 12rem;
  position: relative;
}

.business-card-wrapper .logo {
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 4rem;
  width: 4rem;
  object-fit: contain;
  background: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.business-card-wrapper .profile {
  margin-top: -4rem;
  padding: 0 2rem;
  text-align: center;
}

.business-card-wrapper .profile-image {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 4px solid white;
  margin: 0 auto;
  object-fit: cover;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.business-card-wrapper .name {
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
}

.business-card-wrapper .company {
  color: var(--secondary);
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.business-card-wrapper .contact-info {
  padding: 0 2rem;
}

.business-card-wrapper .contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4b5563;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: color 0.2s;
}

.business-card-wrapper .contact-item:hover {
  color: var(--secondary);
}

.business-card-wrapper .social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.business-card-wrapper .social-link {
  color: var(--secondary);
  transition: color 0.2s;
}

.business-card-wrapper .social-link:hover {
  color: var(--primary);
}

.business-card-wrapper .buttons {
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
}

.business-card-wrapper .button {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  transition: opacity 0.2s;
}

.business-card-wrapper .button:hover {
  opacity: 0.9;
}

.business-card-wrapper .share-button {
  background-color: var(--secondary);
}

.business-card-wrapper .save-button {
  background-color: var(--accent);
}`;
