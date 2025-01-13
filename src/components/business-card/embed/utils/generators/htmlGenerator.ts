import { BusinessCardData } from "@/types/businessCard";

import { generateHeadSection } from "./sections/headSection";
import { generateHeaderSection } from "./sections/headerSection";
import { generateContactSection } from "./sections/contactSection";
import { generateSocialSection } from "./sections/socialSection";
import { generateActionsSection } from "./sections/actionsSection";
import { generateStylesSection } from "./sections/stylesSection";
import { generateScriptSection } from "./sections/scriptSection";

export const generateEmbedCode = (data: BusinessCardData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  ${generateHeadSection(data)}
  ${generateStylesSection(data)}
</head>
<body>
  <div class="business-card-wrapper">
    <div class="business-card">
      ${generateHeaderSection(data)}
      <div class="content">
        ${generateContactSection(data)}
        ${generateSocialSection(data)}
        ${generateActionsSection(data)}
      </div>
    </div>
  </div>
  <script>
    ${generateScriptSection(data)}
  </script>
</body>
</html>`;
