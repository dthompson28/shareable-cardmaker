import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateBaseStyles } from "./styles/baseStyles";
import { generateHeaderStyles } from "./styles/headerStyles";
import { generateContactStyles } from "./styles/contactStyles";
import { generateSocialStyles } from "./styles/socialStyles";

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generateHeaderStyles(data)}
  ${generateContactStyles(data)}
  ${generateSocialStyles(data)}
`;