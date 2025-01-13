import { BusinessCardData } from "@/types/businessCard";

import { generateHeaderSection, generateContactSection, generateSocialSection, generateActionButtonsSection } from "./generators/htmlSections";
import { generateScriptContent } from "./generators/scriptGenerator";

export const generateHeaderHTML = (data: BusinessCardData) => generateHeaderSection(data);
export const generateContactHTML = (data: BusinessCardData) => generateContactSection(data);
export const generateSocialHTML = (data: BusinessCardData) => generateSocialSection(data);
export const generateActionButtonsHTML = (data: BusinessCardData) => generateActionButtonsSection(data);
export const generateScriptHTML = (data: BusinessCardData) => `<script>${generateScriptContent(data)}</script>`;

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>${data.name} - Digital Business Card</title>
  <meta name="description" content="Digital Business Card for ${data.name}">
  <meta name="author" content="${data.name}">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
</head>
<body>
  <div id="digital-business-card-root" class="dbc-wrapper">
    <div class="dbc-container">
      <div class="dbc-business-card">
        ${generateHeaderHTML(data)}
        <div class="dbc-content">
          ${generateContactHTML(data)}
          ${generateSocialHTML(data)}
          ${generateActionButtonsHTML(data)}
        </div>
      </div>
    </div>
  </div>
  ${generateScriptHTML(data)}
</body>
</html>`;
