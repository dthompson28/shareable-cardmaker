import { BusinessCardData } from "@/components/BusinessCardForm";
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
  ${generateBaseStyles(data)}
  ${generateHeaderStyles(data)}
  ${generateContentStyles(data)}
  ${generateSocialStyles(data)}
  ${generateButtonStyles(data)}
`;

const generateHeaderHTML = (data: BusinessCardData) => generateHeaderSection(data);
const generateContactHTML = (data: BusinessCardData) => generateContactSection(data);
const generateSocialHTML = (data: BusinessCardData) => generateSocialSection(data);
const generateActionButtonsHTML = (data: BusinessCardData) => generateActionButtonsSection(data);
const generateScriptHTML = (data: BusinessCardData) => `<script>${generateScriptSection(data)}</script>`;

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@400;700&family=Merriweather:wght@400;700&family=Poppins:wght@400;500;600&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
  <style>
    ${generateStyles(data)}
  </style>
</head>
<body>
  <div class="bc-card-container">
    <div class="bc-business-card">
      ${generateHeaderHTML(data)}
      <div class="bc-content">
        ${generateContactHTML(data)}
        ${generateSocialHTML(data)}
        ${generateActionButtonsHTML(data)}
      </div>
    </div>
  </div>
  ${generateScriptHTML(data)}
</body>
</html>`;