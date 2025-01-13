import { BusinessCardData } from "@/types/businessCard";
import { generateFullTemplate } from "./templates/fullTemplate";
import { generateCompactTemplate } from "./templates/compactTemplate";

export const generateEmbedCode = (data: BusinessCardData) => {
  return data.photoStyle === 'full' 
    ? generateFullTemplate(data)
    : generateCompactTemplate(data);
};