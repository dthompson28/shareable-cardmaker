import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateHeaderSection, generateContactSection, generateSocialSection, generateAdditionalLinksSection, generateActionButtonsSection } from "./generators/htmlSections";
import { generateScriptContent } from "./generators/scriptGenerator";

export const generateEmbedCode = (data: BusinessCardData) => {
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
    :root {
      --card-primary: ${data.colors.primary};
      --card-secondary: ${data.colors.secondary};
      --card-accent: ${data.colors.accent};
      --card-background: ${data.colors.background};
    }
    
    body {
      margin: 0;
      padding: 0;
      background-color: var(--card-background);
      font-family: 'Open Sans', sans-serif;
    }

    .font-playfair {
      font-family: 'Playfair Display', serif;
    }

    .font-opensans {
      font-family: 'Open Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="min-h-screen p-4 md:p-8">
    <div class="max-w-lg mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
      ${generateHeaderSection(data)}
      <div class="relative">
        ${generateContactSection(data)}
        ${generateSocialSection(data)}
        ${generateAdditionalLinksSection(data)}
        ${generateActionButtonsSection(data)}
      </div>
    </div>
  </div>
  <script>
    ${generateScriptContent(data)}
  </script>
</body>
</html>`;
};