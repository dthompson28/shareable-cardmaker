import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateHeadSection } from "./sections/headSection";
import { generateHeaderSection } from "./sections/headerSection";
import { generateContactSection } from "./sections/contactSection";
import { generateSocialSection } from "./sections/socialSection";
import { generateActionButtonsSection } from "./sections/actionButtonsSection";
import { generateScriptSection } from "./sections/scriptSection";
import { generateStylesSection } from "./sections/stylesSection";

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  ${generateHeadSection(data)}
  ${generateStylesSection(data)}
</head>
<body>
  <div class="business-card">
    ${generateHeaderSection(data)}
    <div class="content">
      ${generateContactSection(data)}
      ${generateSocialSection(data)}
      ${generateActionButtonsSection(data)}
    </div>
  </div>
  ${generateScriptSection(data)}
</body>
</html>`;