import { BusinessCardData } from "@/types/businessCard";
import { BaseStyles } from "./base/BaseStyles";
import { HeaderStyles } from "./components/HeaderStyles";
import { ContentStyles } from "./components/ContentStyles";
import { SocialStyles } from "./components/SocialStyles";
import { ActionStyles } from "./components/ActionStyles";
import { UtilityStyles } from "./components/UtilityStyles";
import { generateScript } from '../generators/ScriptGenerator';

interface PreviewStylesProps {
  data: BusinessCardData;
}

export const PreviewStyles = ({ data }: PreviewStylesProps) => {
  return (
    <>
      <style>
        {`
          :root {
            --primary: ${data.colors.primary};
            --secondary: ${data.colors.secondary};
            --accent: ${data.colors.accent};
            --background: ${data.colors.background};
          }
          ${BaseStyles({ data })}
          ${HeaderStyles({ data })}
          ${ContentStyles({ data })}
          ${SocialStyles({ data })}
          ${ActionStyles({ data })}
          ${UtilityStyles({ data })}
        `}
      </style>
      <script dangerouslySetInnerHTML={{ __html: generateScript(data) }} />
    </>
  );
};