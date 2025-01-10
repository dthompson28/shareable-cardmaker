import { BusinessCardData } from "@/components/BusinessCardForm";
import { 
  generateBaseStyles,
  generatePhotoStyles,
  generateContentStyles,
  generateContactStyles,
  generateSocialStyles,
  generateLogoStyles,
} from "./utils/styleGenerator";
import {
  generateContactHTML,
  generateSocialHTML,
  generateAdditionalLinksHTML,
} from "./utils/htmlGenerator";

export const generateEmbedCode = (data: BusinessCardData) => {
  const styles = [
    generateBaseStyles(data),
    generatePhotoStyles(data),
    generateContentStyles(data),
    generateContactStyles(data),
    generateSocialStyles(data),
    generateLogoStyles(data),
  ].join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Business Card - ${data.name}</title>
<script defer src="https://unpkg.com/lucide@latest"></script>
<style>${styles}</style>
</head>
<body>
<div class="business-card">
<div class="card">
<div class="photo-container">
${data.photo ? '<div class="photo"></div>' : ''}
${data.logo ? '<div class="logo"></div>' : ''}
</div>
<div class="content">
<h2 class="name">${data.name}</h2>
${data.jobTitle ? `<p class="job-title">${data.jobTitle}</p>` : ''}
${data.company ? `<p class="company">${data.company}</p>` : ''}
${generateContactHTML(data)}
${generateSocialHTML(data)}
${generateAdditionalLinksHTML(data)}
</div>
</div>
</div>
<script>lucide.createIcons();</script>
</body>
</html>`;
};