import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateStyles } from "./utils/styleGenerator";
import {
  generateContactHTML,
  generateHeaderHTML,
  generateSocialHTML,
  generateAdditionalLinksHTML,
  generateActionButtonsHTML,
} from "./utils/htmlGenerator";

export const generateEmbedCode = (data: BusinessCardData) => {
  const styles = generateStyles(data);

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
${generateHeaderHTML(data)}
<div class="content">
${generateContactHTML(data)}
${generateSocialHTML(data)}
${generateAdditionalLinksHTML(data)}
${generateActionButtonsHTML()}
</div>
</div>
</div>
<script>lucide.createIcons();</script>
</body>
</html>`;
};