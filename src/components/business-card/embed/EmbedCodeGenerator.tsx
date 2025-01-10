import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateStyles } from "./utils/styleGenerator";
import {
  generateHeaderHTML,
  generateContactHTML,
  generateSocialHTML,
  generateActionButtonsHTML,
  generateScriptHTML,
} from "./utils/htmlGenerator";

export const generateEmbedCode = (data: BusinessCardData) => {
  const styles = generateStyles(data);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${styles}
    .business-card {
      width: 100%;
      max-width: 28rem;
      margin: 0 auto;
      font-family: 'Open Sans', sans-serif;
      background-color: ${data.colors.background};
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }
    .button {
      font-family: 'Open Sans', sans-serif;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
      width: 100%;
    }
    .share-button {
      background-color: ${data.colors.primary};
      color: white;
    }
    .share-button:hover {
      background-color: ${data.colors.secondary};
      opacity: 0.9;
    }
    .save-button {
      background-color: transparent;
      color: ${data.colors.accent};
      border: 2px solid ${data.colors.accent};
    }
    .save-button:hover {
      background-color: ${data.colors.accent};
      color: white;
    }
    .contact-item {
      font-family: 'Open Sans', sans-serif;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${data.colors.primary};
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 0.375rem;
      transition: all 0.2s ease;
    }
    .contact-item:hover {
      background-color: ${data.colors.background};
      color: ${data.colors.secondary};
    }
    .social-link {
      color: ${data.colors.primary};
      transition: all 0.2s ease;
    }
    .social-link:hover {
      color: ${data.colors.secondary};
      transform: translateY(-2px);
    }
    .name {
      font-family: 'Playfair Display', serif;
      color: ${data.colors.primary};
    }
    .job-title {
      font-family: 'Playfair Display', serif;
      color: ${data.colors.secondary};
    }
    .company {
      font-family: 'Playfair Display', serif;
      color: ${data.colors.accent};
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="business-card">
      ${generateHeaderHTML(data)}
      ${generateContactHTML(data)}
      ${generateSocialHTML(data)}
      ${generateActionButtonsHTML()}
    </div>
  </div>
  ${generateScriptHTML(data)}
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.card-container');
      if (container) {
        container.classList.remove('loading');
        container.classList.add('loaded');
      }
    });

    const preloadImages = () => {
      const images = [
        ${data.logo ? `'${data.logo}',` : ''}
        ${data.photo ? `'${data.photo}'` : ''}
      ].filter(Boolean);
      
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  </script>
</body>
</html>`;
};
