import { BusinessCardData } from "@/components/BusinessCardForm";
import {
  generateHeaderSection,
  generateContactSection,
  generateSocialSection,
  generateActionButtonsSection,
  generateScriptContent,
} from "./htmlGenerator";
import {
  generateBaseStyles,
  generateLayoutStyles,
  generateComponentStyles,
} from "./styleUtils";

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.name} - Digital Business Card</title>
  <style>
    ${generateBaseStyles(data)}
    ${generateLayoutStyles()}
    ${generateComponentStyles()}
  </style>
</head>
<body>
  <div class="dbc-container">
    <div class="dbc-card">
      ${generateHeaderSection(data)}
      ${generateContactSection(data)}
      ${generateSocialSection(data)}
      ${generateActionButtonsSection(data)}
    </div>
  </div>
  <script>
    ${generateScriptContent(data)}
  </script>
</body>
</html>
`;