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
  </style>
</head>
<body>
  <div class="bc-card-container">
    <div class="bc-business-card">
      ${generateHeaderHTML(data)}
      ${generateContactHTML(data)}
      ${generateSocialHTML(data)}
      ${generateActionButtonsHTML(data)}
    </div>
  </div>
  ${generateScriptHTML(data)}
</body>
</html>`;
};