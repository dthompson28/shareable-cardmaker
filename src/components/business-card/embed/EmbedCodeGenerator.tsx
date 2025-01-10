import { BusinessCardData } from "../../BusinessCardForm";

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Card - ${data.name}</title>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    .business-card {
      max-width: 500px;
      margin: 0 auto;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .card {
      background-color: ${data.colors.background};
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      position: relative;
      min-height: 500px;
    }
    .photo-container {
      position: relative;
      ${data.photoStyle === 'compact' 
        ? `height: 12rem; background-color: ${data.colors.secondary};` 
        : 'height: 16rem;'}
    }
    .photo {
      ${data.photoStyle === 'compact'
        ? `
          position: absolute;
          left: 1.5rem;
          bottom: -3rem;
          width: 12rem;
          height: 12rem;
          border-radius: 9999px;
          border: 4px solid white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          z-index: 10;
        `
        : `
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
      background-image: url(${data.photo});
      background-size: cover;
      background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
    }
    .content {
      padding: 1.5rem;
      ${data.photoStyle === 'compact' ? 'padding-top: 4rem;' : ''}
    }
    .name {
      font-size: 1.875rem;
      font-weight: 700;
      color: ${data.colors.primary};
      margin: 0 0 0.5rem 0;
    }
    .job-title {
      font-size: 1.25rem;
      color: ${data.colors.secondary};
      margin: 0 0 0.25rem 0;
    }
    .company {
      font-size: 1.125rem;
      color: ${data.colors.accent};
      margin: 0 0 1.5rem 0;
    }
    .contact-info {
      margin: 1.5rem 0;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 1rem 0;
      color: ${data.colors.primary};
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .contact-item:hover {
      opacity: 0.8;
    }
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 1.5rem 0;
    }
    .social-link {
      color: ${data.colors.primary};
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .social-link:hover {
      opacity: 0.8;
    }
    .additional-links {
      margin-top: 1.5rem;
    }
    .additional-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${data.colors.secondary};
      text-decoration: none;
      margin: 0.5rem 0;
      transition: opacity 0.2s;
    }
    .additional-link:hover {
      opacity: 0.8;
    }
    .logo {
      position: absolute;
      width: 4rem;
      height: 4rem;
      background-image: url(${data.logo});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      ${data.logoPosition.x === 0 && data.logoPosition.y === 0 ? 'top: 1rem; left: 1rem;' : ''}
      ${data.logoPosition.x === 100 && data.logoPosition.y === 0 ? 'top: 1rem; right: 1rem;' : ''}
      ${data.logoPosition.x === 0 && data.logoPosition.y === 100 ? 'bottom: 1rem; left: 1rem;' : ''}
      ${data.logoPosition.x === 100 && data.logoPosition.y === 100 ? 'bottom: 1rem; right: 1rem;' : ''}
      z-index: 20;
    }
  </style>
</head>
<body>
  <div class="business-card">
    <div class="card">
      <div class="photo-container">
        ${data.photo ? '<div class="photo"></div>' : ''}
        ${data.logo ? '<div class="logo"></div>' : ''}
      </div>
      <div class="content">
        <h2 class="name">${data.name}</h2>
        ${data.jobTitle ? `<p class="job-title">${data.jobTitle}</p>` : ''}
        ${data.company ? `<p class="company">${data.company}</p>` : ''}
        
        <div class="contact-info">
          ${data.phone ? `
            <a href="tel:${data.phone}" class="contact-item">
              <i data-lucide="phone"></i>
              <span>${data.phone}</span>
            </a>
          ` : ''}
          ${data.email ? `
            <a href="mailto:${data.email}" class="contact-item">
              <i data-lucide="mail"></i>
              <span>${data.email}</span>
            </a>
          ` : ''}
          ${data.website ? `
            <a href="${data.website}" target="_blank" rel="noopener noreferrer" class="contact-item">
              <i data-lucide="globe"></i>
              <span>${data.website}</span>
            </a>
          ` : ''}
          ${data.address ? `
            <div class="contact-item">
              <i data-lucide="map-pin"></i>
              <span>${data.address}</span>
            </div>
          ` : ''}
        </div>

        ${Object.entries(data.social)
          .filter(([key, value]) => key !== 'additionalLinks' && value)
          .length > 0
          ? `
          <div class="social-links">
            ${data.social.linkedin ? `
              <a href="${data.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i data-lucide="linkedin"></i>
              </a>
            ` : ''}
            ${data.social.facebook ? `
              <a href="${data.social.facebook}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i data-lucide="facebook"></i>
              </a>
            ` : ''}
            ${data.social.instagram ? `
              <a href="${data.social.instagram}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i data-lucide="instagram"></i>
              </a>
            ` : ''}
            ${data.social.twitter ? `
              <a href="${data.social.twitter}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i data-lucide="twitter"></i>
              </a>
            ` : ''}
            ${data.social.youtube ? `
              <a href="${data.social.youtube}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i data-lucide="youtube"></i>
              </a>
            ` : ''}
            ${data.social.tiktok ? `
              <a href="${data.social.tiktok}" target="_blank" rel="noopener noreferrer" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            ` : ''}
            ${data.social.whatsapp ? `
              <a href="${data.social.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-link">
                <i data-lucide="phone"></i>
              </a>
            ` : ''}
          </div>
          ` : ''}
        
        ${data.social.additionalLinks?.length
          ? `
          <div class="additional-links">
            ${data.social.additionalLinks.map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="additional-link">
                <i data-lucide="external-link"></i>
                <span>${link.title}</span>
              </a>
            `).join('')}
          </div>
          ` : ''}
      </div>
    </div>
  </div>
  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;