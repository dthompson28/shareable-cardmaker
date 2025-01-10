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
:root {
  --primary: #00674f;
  --secondary: #326872;
  --accent: #be5103;
  --background: #cecabe;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: var(--background);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.container {
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
}

.business-card {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.header {
  position: relative;
  height: 250px;
  background-image: url('https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/67492bc96a2894272f8c25d7.jpeg');
  background-size: cover;
  background-position: center;
}

.header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.header-content {
  position: relative;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header-logo {
  align-self: flex-end;
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.header-text {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.header-text p {
  font-size: 1rem;
  opacity: 0.9;
}

.content {
  padding: 1.5rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.contact-link:hover {
  background-color: rgba(0, 103, 79, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  background-color: var(--primary);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.social-link:hover {
  transform: translateY(-2px);
  background-color: var(--secondary);
}

.additional-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.additional-link:hover {
  background-color: rgba(0, 103, 79, 0.1);
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.action-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.share-button {
  background-color: var(--primary);
  color: white;
}

.share-button:hover {
  background-color: var(--secondary);
}

.save-button {
  background-color: var(--accent);
  color: white;
}

.save-button:hover {
  background-color: var(--primary);
}

@media (max-width: 640px) {
  .container {
    padding: 0;
  }
  
  .business-card {
    border-radius: 0;
    box-shadow: none;
  }
}`;
