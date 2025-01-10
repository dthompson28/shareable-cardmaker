export const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Digital Business Card</title>
  <meta name="description" content="Digital Business Card">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="business-card-wrapper">
    <div class="card-container">
      <div class="business-card">
        <div class="header">
          <img 
            src="https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/674922593447a59599123157.png" 
            alt="Logo" 
            class="logo"
          />
        </div>
        <div class="profile">
          <img 
            src="https://storage.googleapis.com/msgsndr/MZWdQlgITZo9mm1376Dv/media/67709b6d2ec4eb80e758f964.png" 
            alt="Dani Thompson" 
            class="profile-image"
          />
          <h1 class="name">Dani Thompson</h1>
          <h2 class="company">Thompson Limited</h2>
        </div>
        <div class="contact-info">
          <a href="tel:440-503-8011" class="contact-item">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            440-503-8011
          </a>
          <a href="mailto:dani@danithompsonltd.com" class="contact-item">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <path d="m22 6-10 7L2 6"/>
            </svg>
            dani@danithompsonltd.com
          </a>
        </div>
        <div class="social-links">
          <a href="https://www.facebook.com/danithomp2014" class="social-link">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
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
