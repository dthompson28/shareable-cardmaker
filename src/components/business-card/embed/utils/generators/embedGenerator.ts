import { BusinessCardData } from "@/types/businessCard";

import { generateBaseStyles } from "./sections/baseStyles";
import { generateHeaderStyles } from "./sections/headerStyles";
import { generateContentStyles } from "./sections/contentStyles";
import { generateSocialStyles } from "./sections/socialStyles";
import { generateButtonStyles } from "./sections/buttonStyles";
import { generateHeaderSection } from "./sections/headerSection";
import { generateContactSection } from "./sections/contactSection";
import { generateSocialSection } from "./sections/socialSection";
import { generateActionButtonsSection } from "./sections/actionButtonsSection";
import { generateScriptSection } from "./sections/scriptSection";

const generateStyles = (data: BusinessCardData) => `
  :root {
    --heading-font: "${data.fonts.heading}", serif;
    --body-font: "${data.fonts.body}", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--body-font);
    line-height: 1.5;
    background-color: transparent !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .business-card {
    width: 100%;
    max-width: 448px;
    border-radius: 12px;
    background-color: ${data.colors.background};
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .header {
    height: 192px;
    width: 100%;
    background-color: ${data.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .logo {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 64px;
    height: 64px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .contact-photo {
    width: 192px;
    height: 192px;
    border-radius: 50%;
    border: 4px solid ${data.colors.background};
    background-size: cover;
    background-position: ${data.photoPosition.x}% ${data.photoPosition.y}%;
    position: absolute;
    bottom: -96px;
    left: 24px;
    z-index: 10;
  }

  .content {
    padding: 120px 24px 24px;
  }

  .name {
    font-size: 28px;
    margin-bottom: 4px;
    font-weight: 700;
    font-family: var(--heading-font);
    color: ${data.colors.primary};
  }

  .title {
    font-size: 18px;
    font-family: var(--heading-font);
    color: ${data.colors.secondary};
    margin: 2px 0;
  }

  .company {
    font-size: 18px;
    font-family: var(--heading-font);
    color: ${data.colors.accent};
    margin: 2px 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${data.colors.primary};
    text-decoration: none;
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;
  }

  .contact-link:hover {
    background-color: ${data.colors.primary}1a;
  }

  .contact-link svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 32px 0;
  }

  .social-icon {
    color: ${data.colors.primary};
    width: 20px;
    height: 20px;
  }

  .social-icon svg {
    width: 20px;
    height: 20px;
  }

  .additional-links {
    margin: 24px 0;
  }

  .link-group {
    margin-bottom: 24px;
  }

  .group-title {
    font-size: 18px;
    font-weight: 600;
    font-family: var(--heading-font);
    color: ${data.colors.primary};
    margin-bottom: 12px;
  }

  .additional-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${data.colors.secondary};
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 12px;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;
  }

  .additional-link:hover {
    background-color: ${data.colors.secondary}1a;
  }

  .additional-link svg {
    width: 20px;
    height: 20px;
  }

  .action-buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
  }

  .action-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .share-button {
    color: white;
    border: none;
    background-color: ${data.colors.primary};
  }

  .share-button svg {
    color: white;
  }

  .save-button {
    background-color: transparent;
    color: ${data.colors.accent};
    border: 2px solid ${data.colors.accent};
  }

  .save-button svg {
    color: currentColor;
  }
`;

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Merriweather:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;600;700&family=Lato:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    ${generateStyles(data)}
  </style>
</head>
<body>
<div style="width: 448px; margin: auto;">
  <div class="business-card">
    <div class="header">
      ${data.photo ? `<div class="contact-photo" style="background-image: url('${data.photo}');"></div>` : ''}
      ${data.logo ? `<div class="logo" style="background-image: url('${data.logo}');"></div>` : ''}
    </div>

    <div class="content">
      <div class="name">${data.name}</div>
      ${data.jobTitle ? `<div class="title">${data.jobTitle}</div>` : ''}
      ${data.company ? `<div class="company">${data.company}</div>` : ''}

      ${generateContactSection(data)}
      ${generateSocialSection(data)}
      ${generateActionButtonsSection(data)}
    </div>
  </div>
</div>

<script>
  ${generateScriptSection(data)}
</script>
</body>
</html>`;