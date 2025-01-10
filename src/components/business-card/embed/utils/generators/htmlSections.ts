import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateHeaderSection } from "./sections/headerSection";
import { generateContactSection } from "./sections/contactSection";
import { generateSocialSection } from "./sections/socialSection";
import { generateActionButtonsSection } from "./sections/actionButtonsSection";
import { generateVCard } from "./vCardGenerator";

export {
  generateHeaderSection,
  generateContactSection,
  generateSocialSection,
  generateActionButtonsSection,
};

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <title>${data.name} - Digital Business Card</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: ${data.colors.primary};
      --secondary: ${data.colors.secondary};
      --accent: ${data.colors.accent};
      --background: ${data.colors.background};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background-color: var(--background);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bc-card-container {
      width: 100%;
      max-width: 100vw;
      padding: 1rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bc-business-card {
      width: 100%;
      max-width: 22rem;
      background-color: var(--background);
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: relative;
    }

    @media (max-width: 640px) {
      .bc-card-container {
        padding: 0.5rem;
      }
      
      .bc-business-card {
        border-radius: 0;
        box-shadow: none;
      }
    }

    .font-playfair {
      font-family: 'Playfair Display', serif;
    }

    .font-opensans {
      font-family: 'Open Sans', sans-serif;
    }

    /* Prevent iOS telephone number styling */
    a[href^="tel"] {
      color: inherit;
      text-decoration: none;
    }

    /* HighLevel specific optimizations */
    .highlevel-form {
      margin-top: 2rem;
    }

    /* Ensure buttons work well with HighLevel's click tracking */
    button, 
    a {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    /* Optimize for HighLevel's mobile view */
    @media screen and (max-width: 768px) {
      input,
      button,
      a {
        min-height: 44px; /* Better touch targets */
      }
    }
  </style>
</head>
<body>
  <div class="bc-card-container">
    <div class="bc-business-card">
      ${generateHeaderSection(data)}
      <div class="content">
        ${generateContactSection(data)}
        ${generateSocialSection(data)}
        ${generateActionButtonsSection(data)}
      </div>
    </div>
  </div>
  <script>
    function saveContact() {
      const vcard = \`${generateVCard(data)}\`;
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = '${data.name.replace(/\s+/g, '_')}_Contact.vcf';
      link.click();
      URL.revokeObjectURL(url);
    }

    function shareCard() {
      if (navigator.share) {
        navigator.share({
          title: '${data.name} - Digital Business Card',
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
      // Notify HighLevel that the embed is ready
      if (window.parent) {
        window.parent.postMessage('embed_ready', '*');
      }
    });
  </script>
</body>
</html>`;