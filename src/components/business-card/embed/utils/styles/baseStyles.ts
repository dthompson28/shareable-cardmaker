import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateContainerStyles } from "./layout/containerStyles";
import { generateHeaderLayoutStyles } from "./layout/headerStyles";
import { generateContentLayoutStyles } from "./layout/contentStyles";
import { generateSocialLayoutStyles } from "./layout/socialStyles";
import { generateResponsiveStyles } from "./layout/responsiveStyles";

export const generateBaseStyles = (data: BusinessCardData) => `
  ${generateContainerStyles(data)}
  ${generateHeaderLayoutStyles(data)}
  ${generateContentLayoutStyles(data)}
  ${generateSocialLayoutStyles(data)}
  ${generateResponsiveStyles()}
`;