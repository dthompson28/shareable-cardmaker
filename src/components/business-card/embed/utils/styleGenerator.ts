import { BusinessCardData } from "@/components/BusinessCardForm";
import { generateBaseStyles } from "./styles/baseStyles";
import { generateContactStyles } from "./styles/contactStyles";
import { generateSocialStyles } from "./styles/socialStyles";
import { generateActionStyles } from "./styles/actionStyles";

export const generateStyles = (data: BusinessCardData) => `
  ${generateBaseStyles(data)}
  ${generateContactStyles(data)}
  ${generateSocialStyles(data)}
  ${generateActionStyles(data)}
`;