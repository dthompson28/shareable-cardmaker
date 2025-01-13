import { BusinessCardData } from "@/types/businessCard";
import { generateStyles } from "../styles/styleGenerator";
import { 
  generateHeaderHTML, 
  generateContactHTML, 
  generateSocialHTML, 
  generateActionButtonsHTML, 
  generateScriptHTML 
} from "./sections/htmlSections";

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