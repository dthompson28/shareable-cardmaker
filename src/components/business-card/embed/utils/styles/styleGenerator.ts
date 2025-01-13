import { BusinessCardData } from "@/types/businessCard";
import { generateBaseStyles } from "./baseStyles";
import { generateHeaderStyles } from "./headerStyles";
import { generateContactStyles } from "./contactStyles";
import { generateSocialStyles } from "./socialStyles";
import { generateGroupStyles } from "./groupStyles";

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generateHeaderStyles(data)}
  ${generateContactStyles(data)}
  ${generateSocialStyles(data)}
  ${generateGroupStyles(data)}
`;