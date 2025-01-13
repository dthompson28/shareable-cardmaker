import { BusinessCardData } from "@/types/businessCard";
import { generateBaseStyles } from "./baseStyles";
import { generateHeaderStyles } from "./headerStyles";
import { generateContactStyles } from "./contactStyles";
import { generateSocialStyles } from "./socialStyles";

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generateHeaderStyles(data)}
  ${generateContactStyles(data)}
  ${generateSocialStyles(data)}
`;