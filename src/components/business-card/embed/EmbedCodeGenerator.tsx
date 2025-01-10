import { BusinessCardData } from "../../BusinessCardForm";

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Card - ${data.name}</title>
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
    }
    .header {
      height: 12rem;
      background-color: ${data.colors.secondary};
      position: relative;
    }
    .photo {
      width: 12rem;
      height: 12rem;
      border-radius: 9999px;
      object-fit: cover;
      margin-top: 6rem;
      border: 4px solid white;
      position: relative;
      z-index: 1;
    }
    .content {
      padding: 1.5rem;
    }
    .name {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${data.colors.primary};
      margin: 0 0 0.5rem 0;
    }
    .job-title {
      color: ${data.colors.secondary};
      margin: 0 0 0.25rem 0;
    }
    .company {
      color: ${data.colors.accent};
      margin: 0 0 1rem 0;
    }
    .contact-info {
      margin-top: 1rem;
      color: ${data.colors.primary};
    }
    .contact-info p {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .social-links {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
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
      margin-top: 1rem;
    }
    .additional-link {
      color: ${data.colors.secondary};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.5rem 0;
    }
    .additional-link:hover {
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="business-card">
    <div class="card">
      <div class="header">
        ${data.photo ? `<img src="${data.photo}" alt="${data.name}" class="photo" />` : ''}
      </div>
      <div class="content">
        <h2 class="name">${data.name}</h2>
        ${data.jobTitle ? `<p class="job-title">${data.jobTitle}</p>` : ''}
        ${data.company ? `<p class="company">${data.company}</p>` : ''}
        <div class="contact-info">
          ${data.phone ? `<p>📞 ${data.phone}</p>` : ''}
          ${data.email ? `<p>✉️ ${data.email}</p>` : ''}
          ${data.website ? `<p>🌐 ${data.website}</p>` : ''}
          ${data.address ? `<p>📍 ${data.address}</p>` : ''}
        </div>
        ${Object.entries(data.social)
          .filter(([key, value]) => key !== 'additionalLinks' && value)
          .length > 0
          ? `
          <div class="social-links">
            ${data.social.linkedin ? `<a href="${data.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>` : ''}
            ${data.social.facebook ? `<a href="${data.social.facebook}" target="_blank" rel="noopener noreferrer" class="social-link">Facebook</a>` : ''}
            ${data.social.instagram ? `<a href="${data.social.instagram}" target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>` : ''}
            ${data.social.twitter ? `<a href="${data.social.twitter}" target="_blank" rel="noopener noreferrer" class="social-link">Twitter</a>` : ''}
            ${data.social.youtube ? `<a href="${data.social.youtube}" target="_blank" rel="noopener noreferrer" class="social-link">YouTube</a>` : ''}
            ${data.social.tiktok ? `<a href="${data.social.tiktok}" target="_blank" rel="noopener noreferrer" class="social-link">TikTok</a>` : ''}
            ${data.social.whatsapp ? `<a href="${data.social.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-link">WhatsApp</a>` : ''}
          </div>
          ` : ''}
        ${data.social.additionalLinks?.length
          ? `
          <div class="additional-links">
            ${data.social.additionalLinks.map(link => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="additional-link">
                ↗️ ${link.title}
              </a>
            `).join('')}
          </div>
          ` : ''}
      </div>
    </div>
  </div>
</body>
</html>`;